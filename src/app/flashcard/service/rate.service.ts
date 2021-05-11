
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rating } from '../model/rating';


/**
 * Provides methods for passing Rate objects (question difficulty rating) between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class RateService {

  private apiServerUrl = environment.apiUrl; // Base API URL

  constructor(private http: HttpClient) {
  }

  /**
   * Persists a Rate object to the database
   * @param data - Rate object to be persisted
   * @returns - returns persisted Rate object
   */
  create(data: any): Observable<any> {
    return this.http.post(`http://${this.apiServerUrl}/flashcards/ratings/`, data);
  }

  /**
   * Gets an existing Rate object from the database
   * @param flashcardId - id of the Flashcard to find a rating for
   * @param userId - id of the User to find a rating for
   * @returns - returns the associated Rate object, if it exists
   */
  get(flashcardId: number, userId: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/flashcards/ratings?flashcardId=${flashcardId}&userId=${userId}`);
  }

  /**
   * Gets all existing Rating objects for the given flashcard
   * @param flashcardId - id of the Flashcard to find ratings for
   * @returns - returns all Rating objects for the given answer
   */
   getAllRatings(flashcardId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`http://${this.apiServerUrl}/flashcards/ratings/all?flashcardId=${flashcardId}`);
  }

  // (may use in the future)
  // /**
  //  * Deletes an existing Rating
  //  * @param id - the id of the Rating to delete
  //  * @returns - returns deleted Rating
  //  */
  //  delete(id: any): Observable<any> {
  //   return this.http.delete(`http://${this.apiServerUrl}/flashcards/ratings/${id}`);
  // }


}
