import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';

const baseUrl = 'http://localhost:8080/flashcards';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${baseUrl}/all`);
  }

  getAllByDifficulty(difficulty: number): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${baseUrl}/difficulty?difficulty=${difficulty}`);
  }

  getAllByTopic(topic: string): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${baseUrl}/topic?topic=${topic}`);
  }

  getAllByResolved(resolved: boolean): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${baseUrl}/resolved?resolved=${resolved}`);
  }

  get(id: any): Observable<Flashcard> {
    return this.http.get<Flashcard>(`${baseUrl}/id/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(baseUrl, data);
  }

}
