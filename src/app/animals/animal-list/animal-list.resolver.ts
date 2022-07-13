import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animal';
import { AnimalsService } from '../animals.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalListResolver implements Resolve<Animals> {

  constructor(
    private animalsService: AnimalsService,
    private userService: UserService,
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animals> {
    return this.userService.getUser().pipe(
      switchMap(user => {
        const userName = user.name ?? '';
        return this.animalsService.listAnimalsByUser(userName);
      }),
      take(1)
    )
  }

}
