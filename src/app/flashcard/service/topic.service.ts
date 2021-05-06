import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../model/topic';
import { environment } from 'src/environments/environment';

const baseUrl = 'http://localhost:8080/topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(baseUrl);
  }

}
