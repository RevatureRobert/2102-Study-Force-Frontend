import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  createAnswerVote(data: any): Observable<any> {
    return this.http.post(`http://${this.apiServerUrl}/flashcards/votes`, data);
  }

}
