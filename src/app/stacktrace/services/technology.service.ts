import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  private apiServerUrl = environment.apiUrl.concat("/stacktrace/technology");

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
