import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Technology } from '../models/technology';

/**
 * Provides methods for passing Technology objects to and from the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  // Appended the service endpoint to the base url
  apiServerUrl = environment.apiUrl.concat("/stacktrace/technology");

  /**
   * @param http The client for handeling HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * GETs all Technologies from the backend
   */
  getAllTechnology(): Promise<Technology[]> {
    return this.http.get<Technology[]>(this.apiServerUrl, { headers: this.httpHeaders }).toPromise();
  }

  /**
   * POSTs a Technology to the backend
   */
  addTechnology(technology: Technology): void {
    let t = this.http.post(this.apiServerUrl, technology, { headers: this.httpHeaders });
    t.subscribe();
  }

  /**
   * DELETEs a Technology from the backend
   */
  deleteTechnology(technology: Technology): void {
    let t = this.http.delete<Technology>(this.apiServerUrl, { headers: this.httpHeaders });
    t.subscribe();
  }

}
