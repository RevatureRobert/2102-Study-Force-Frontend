import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { FlashcardPage } from 'src/app/flashcard/model/flashcardPage';
import { environment } from 'src/environments/environment';


/**
 * Provides methods for passing Flashcard objects between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  private apiServerUrl = environment.apiUrl; // Base API URL

  public selectedFlashcardForThread = 0; // Used to set the selected Flashcard

  /**
   * @param http - handles HTTP requests
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Gets all Flashcards by page
   * @param page - page # to return
   * @returns - returns a paginated Flashcard observable
   */
  getAllByPage(page: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`${this.apiServerUrl}/flashcards?page=${page}`);
  }

  /**
   * Gets all Flashcards by difficulty
   * @param page - page # to return
   * @param difficulty - only Flashcards with this difficulty will be returned
   * @returns - returns a paginated Flashcard observable
   */
  getAllByDifficultyPage(page: number, difficulty: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`${this.apiServerUrl}/flashcards/difficulty?page=${page}&difficulty=${difficulty}`);
  }



  /**
   * Gets all Flashcards
   * @returns - returns an observable with all Flashcards
   */
  getAll(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/flashcards`);
  }


  /**
   * Gets the Flashcard with the given id
   * @param flashcardId - id of the Flashcard to return
   * @returns - returns Flashcard with the given id
   */
  getFlashcardById(flashcardId: number): Promise<any> {
    return this.http.get(`${this.apiServerUrl}/flashcards/${flashcardId}`).toPromise();

  }

  /**
   * Gets the Flashcards with the given user id
   * @param userId - the id of the user to look for
   * @returns - returns an observable of the Flashcards with the given user id
   */
  getFlashcardsByUserId(userId: number): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/flashcards/by-user/${userId}`);
  }

  /**
   * Gets the Flashcard with the given id
   * @param flashcardId - id of the Flashcard to find Answers for
   * @returns - returns Answers tied to the Flashcard with the given id
   */
  getAnswers(flashcardId: number): Promise<any> {
    return this.http.get(`${this.apiServerUrl}/answers/${flashcardId}`).toPromise();
  }

  /**
   * Gets all Flashcards by difficulty
   * @param difficulty - only Flashcards with this difficulty will be returned
   * @returns - returns all Flashcards with the given difficulty
   */
  getAllByDifficulty(difficulty: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/difficulty?difficulty=${difficulty}`);
  }

  /**
   * Gets all Flashcards by topic
   * @param page - page # to return
   * @param topic - only Flashcards with this topic name will be returned
   * @returns - returns a paginated Flashcard observable
   */
  getAllByTopic(page: number, topic: string): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`${this.apiServerUrl}/flashcards/topics?page=${page}&topicName=${topic}`);
  }

  /**
   * Gets all Flashcards by resolved status
   * @param page - page # to return
   * @param resolved - only Flashcards with this resolved status [true|false] will be returned
   * @returns - returns a paginated Flashcard observable
   */
  getAllByResolved(page: number, resolved: boolean): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`${this.apiServerUrl}/flashcards/resolved?page=${page}&resolved=${resolved}`);
  }



  getAllBySearch(page: number, question: string): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`${this.apiServerUrl}/flashcards/question/?question=${question}`);
  }


  /**
   * Gets the Flashcard with the given id
   * @param flashcardId - id of the Flashcard to return
   * @returns - returns Flashcard with the given id
   */
  get(id: any): Observable<Flashcard> {
    return this.http.get<Flashcard>(`${this.apiServerUrl}/${id}`);
  }

  /**
   * Persists a Flashcard to the database
   * @param data - the Flashcard to be persisted
   * @returns - returns the persisted Flashcard
   */
  create(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/flashcards`, data);
  }

  /**
   * Updates an existing Flashcard
   * @param data - the Flashcard to be updated
   * @returns - returns the updated Flashcard
   */
  update(data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}`, data);
  }


  /**
   * Deletes an existing Flashcard
   * @param id - the id of the Flashcard to delete
   * @returns - returns the deleted Flashcard
   */
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/flashcards/${id}`);
  }

  /**
   * Sets the selected Flashcard
   * @param flashcard - the Flashcard to set as selected
   */
  setSelectedFlashcard(flashcardId: number): void {
    this.selectedFlashcardForThread = flashcardId;
  }

}
