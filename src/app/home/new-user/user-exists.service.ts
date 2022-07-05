import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService: NewUserService) { }

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((username) => this.newUserService.verifyUserExist(username))
      ),
      map((userExists) => (userExists ? { userExists: true } : null)),
      first()
    }
  }
}
