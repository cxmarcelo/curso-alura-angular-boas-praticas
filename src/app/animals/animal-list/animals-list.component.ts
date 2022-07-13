import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  animals!:Animals;
  constructor(
    //private userService: UserService,
    //private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*
    this.userService.getUser().subscribe((user) => {
      const username = user.name ?? '';
      this.animalsService.listAnimalsByUser(username).subscribe(animals => {
        this.animals = animals;
      })
    })
    */
   /*
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const username = user.name ?? '';
        return this.animalsService.listAnimalsByUser(username);
      })
    )
    */

    this.activatedRoute.params.subscribe(param => {
      this.animals = this.activatedRoute.snapshot.data['animals']
    })
  }

}
