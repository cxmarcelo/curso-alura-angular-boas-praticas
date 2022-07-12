import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animals } from './animal';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public listAnimalsByUser(username: string): Observable<Animals> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append("x-access-token", token);
    return this.http.get<Animals>(`${API}/${username}/photos`, {headers});
  }

}
