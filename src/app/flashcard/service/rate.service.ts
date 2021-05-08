import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


/**
 * Provides methods for passing Rate objects (question difficulty rating) between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class RateService {

  private apiServerUrl = environment.apiUrl;

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

}
