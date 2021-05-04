import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../model/topic';

const baseUrl = 'http://localhost:8080/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any[]> {
    return this.http.get<Topic[]>(baseUrl);
  }

}
