import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RateService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  create(data: any): Observable<any> {
    return this.http.post(`http://${this.apiServerUrl}/flashcards/ratings/`, data);
  }

  get(flashcardId: number, userId: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/flashcards/ratings?flashcardId=${flashcardId}&userId=${userId}`);
  }

}
