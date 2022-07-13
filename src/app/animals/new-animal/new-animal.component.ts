import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.scss']
})
export class NewAnimalComponent implements OnInit {

  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  uploadPercentage = 0;

  constructor(
    private animalsService: AnimalsService, 
    private formBuilder: FormBuilder, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  public upload() {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';

    this.animalsService.upload(description, allowComments, this.file)
    .pipe(finalize(()=> this.router.navigate(['animals'])))
    .subscribe((event: HttpEvent<any>) => {
      if(event.type == HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.uploadPercentage = Math.round(100 * (event.loaded / total));
      }
    }, error => {
      console.log(error)
    })
  }

  public saveFile(eventFile: any) {
    const [file] = eventFile?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result)
    reader.readAsDataURL(file);
  }

}
