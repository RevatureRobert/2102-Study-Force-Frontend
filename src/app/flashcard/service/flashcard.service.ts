import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { FlashcardPage } from "src/app/flashcard/model/flashcardPage";
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

  constructor(private http: HttpClient) {
  }

  getAllByPage(page: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://${this.apiServerUrl}/flashcards?page=${page}`);
  }

  getAllByDifficulty(page: number, difficulty: number): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://localhost:8080/flashcards/difficulty?page=${page}&difficulty=${difficulty}`);
  }

  getAllByTopic(page: number, topic: string): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://localhost:8080/flashcards/topics?page=${page}&topicName=${topic}`);
  }

  getAllByResolved(page:number, resolved: boolean): Observable<FlashcardPage> {
    return this.http.get<FlashcardPage>(`http://localhost:8080/flashcards/resolved?page=${page}&resolved=${resolved}`);
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
