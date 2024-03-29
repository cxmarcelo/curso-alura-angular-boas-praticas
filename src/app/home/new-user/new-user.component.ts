import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowercaseValidator } from './lowercase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';
import { userEqualsPasswordValidator } from './user-password-equals.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      fullName: ['', Validators.required, Validators.minLength(4)],
      userName: ['', [lowercaseValidator], [this.userExistsService.userExists()]],
      password: [''],
    }, {validators: [userEqualsPasswordValidator]});
  }

  register() {
    if(this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe(resp => {
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      })
    }
  }
}
