import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animal';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public listAnimalsByUser(username: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${username}/photos`,);
  }

  public animalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`,);
  }

  public deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`,);
  }

  public like(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'})
    .pipe(mapTo(true), catchError((error) => {
      return error.status == NOT_MODIFIED ? of(false) : throwError(error);
    }))
  }

  public upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append("description", description)
    formData.append("allowComments", allowComments ? 'true' : 'false');
    formData.append("imageFile", file);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    })
  }
}
