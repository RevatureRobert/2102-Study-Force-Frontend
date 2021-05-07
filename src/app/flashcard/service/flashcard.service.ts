import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  private apiServerUrl = environment.apiUrl;

  public selectedFlascardForThread?: Flashcard;

  constructor(private http: HttpClient) {
  }

  getAllByPage(page: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://${this.apiServerUrl}/flashcards?page=${page}`);
  }

  getAllByDifficultyPage(page: number, difficulty: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://${this.apiServerUrl}/flashcards/difficulty?page=${page}&difficulty=${difficulty}`);
  }


  getAll(): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/flashcards`);
  }

  async getFlashcardById(flashcardId: number): Promise<any> {
    return await this.http.get(`http://${this.apiServerUrl}/flashcards/${flashcardId}`).toPromise();
  }

  getAnswers(flashcardId: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/answers/${flashcardId}`);
  }

  getAllByDifficulty(difficulty: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/difficulty?difficulty=${difficulty}`);
  }

  getAllByTopic(page: number, topic: string): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://${this.apiServerUrl}/flashcards/topics?page=${page}&topicName=${topic}`);
  }

  getAllByResolved(page:number, resolved: boolean): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://${this.apiServerUrl}/flashcards/resolved?page=${page}&resolved=${resolved}`);
  }

  get(id: any): Observable<Flashcard> {
    return this.http.get<Flashcard>(`http://${this.apiServerUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`http://${this.apiServerUrl}/flashcards`, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`http://${this.apiServerUrl}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`http://${this.apiServerUrl}/flashcards/${id}`);
  }

  setSelectedFlashcard(flascard: Flashcard): void {
    this.selectedFlascardForThread = flascard;
  }

}
