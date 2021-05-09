import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../model/topic';
import { environment } from 'src/environments/environment';

const baseUrl = 'http://localhost:8080/topics';

/**
 * Provides methods for passing Topic objects between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }


  /**
   * Gets all Topics from the database
   * @returns - returns an array of all Topics
   */
  private apiServerUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`http://${this.apiServerUrl}/topics`);
  }

  addTopic(topic: string): Observable<Topic> {
    return this.http.post<Topic>(`http://${this.apiServerUrl}/topics`, {topic: topic});
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.http.delete<Topic>(`http://${this.apiServerUrl}/topics/${id}`);
  }
}
