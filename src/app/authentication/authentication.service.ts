import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  public authentication(username: string, password: string): Observable<any>{
    return this.httpClient.post("http://locahost:3000/user/login", {username, password});
  }
}
