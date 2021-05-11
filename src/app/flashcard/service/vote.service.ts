import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vote } from '../model/vote';



/**
 * Provides methods for passing Vote objects (answer up/down votes) between the frontend and backend
 */

@Injectable({
  providedIn: 'root'
})
export class VoteService {


  private apiServerUrl = environment.apiUrl; // Base API URL

  constructor(private http: HttpClient) {
  }


  /**
   * Persists a new Vote object to the database
   * @param data - the Vote object to be persisted
   * @returns - returns the persisted Vote object
   */
  createAnswerVote(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/flashcards/votes`, data);
  }

  /**
   * Gets an existing Vote object from the database
   * @param answerId - id of the Flashcard to find a vote for
   * @param userId - id of the User to find a vote for
   * @returns - returns the associated Vote object, if it exists
   */
   getVote(answerId: number, userId: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/flashcards/votes?answerId=${answerId}&userId=${userId}`);
  }

  /**
   * Gets all existing Vote objects for the given answer
   * @param answerId - id of the Answer to find votes for
   * @returns - returns all vote objects for the given answer
   */
   getAllVotes(answerId: number): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${this.apiServerUrl}/flashcards/votes/all?answerId=${answerId}`);
  }

}
