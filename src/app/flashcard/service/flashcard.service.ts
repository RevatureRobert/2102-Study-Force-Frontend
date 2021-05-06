import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  private headerInfo = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  private apiServerUrl = environment.apiUrl;

  public selectedFlascardForThread?: Flashcard;

  constructor(private http: HttpClient) {
  }

  setSelectedFlashcard(flascard: Flashcard): void {
    this.selectedFlascardForThread = flascard;
  }


  getAll(): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/flashcards`);
  }

  getFlashcardById(flashcardId: number): Promise<any> {
    return this.http.get(`http://${this.apiServerUrl}/flashcards/${flashcardId}`).toPromise();
  }

  getAnswers(flashcardId: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/answers/${flashcardId}`);
  }

  getAllByDifficulty(difficulty: number): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/difficulty?difficulty=${difficulty}`);
  }

  getAllByTopic(topic: string): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/topic?topic=${topic}`);
  }

  getAllByResolved(resolved: boolean): Observable<any> {
    return this.http.get(`http://${this.apiServerUrl}/resolved?resolved=${resolved}`);
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

  delete(data: any): Observable<any> {
    return this.http.delete(`http://${this.apiServerUrl}`, data);
  }

}
