import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../model/flashcard';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getAll(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.apiServerUrl}/flashcards`);
  }

  getAllByDifficulty(difficulty: number): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.apiServerUrl}/difficulty?difficulty=${difficulty}`);
  }

  getAllByTopic(topic: string): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.apiServerUrl}/topic?topic=${topic}`);
  }

  getAllByResolved(resolved: boolean): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.apiServerUrl}/resolved?resolved=${resolved}`);
  }

  get(id: any): Observable<Flashcard> {
    return this.http.get<Flashcard>(`${this.apiServerUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.apiServerUrl, data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(this.apiServerUrl, data);
  }

}
