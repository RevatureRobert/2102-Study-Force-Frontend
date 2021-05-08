import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";
import { environment } from 'src/environments/environment';


/**
 * Provides methods for passing Vote objects (answer up/down votes) between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  /**
   * Persists a new Vote object to the database
   * @param data - the Vote object to be persisted
   * @returns - returns the persisted Vote object
   */
  createAnswerVote(data: any): Observable<any> {
    return this.http.post(`http://${this.apiServerUrl}/flashcards/votes`, data);
  }

}
