import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { BASE_API_URL} from 'src/environments/environment';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  constructor(private http: HttpClient) { }

  private apiServerUrl = "http://localhost:8080".concat("/stacktrace/technology"); //BASE_API_URL;

  getAllTechnology(): Promise<Technology[]> {
    return this.http.get<Technology[]>(this.apiServerUrl, { headers: this.httpHeaders }).toPromise();
  }

  addTechnology(technology: Technology): void {
    let t = this.http.post(this.apiServerUrl, technology, { headers: this.httpHeaders });
    t.subscribe();
  }

  deleteTechnology(technology: Technology): void {
    let t = this.http.delete<Technology>(this.apiServerUrl, { headers: this.httpHeaders });
    t.subscribe();
  }

}
