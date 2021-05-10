import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technology } from '../models/technology';


/**
 * Provides methods for sending Technology-related requests to the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyURL :string;

  // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  // Append the service endpoint to the base url
  apiServerUrl = environment.apiUrl.concat("/stacktrace/technology");

  /**
   * @param http the client for handling HTTP requests
   */
  constructor(private http: HttpClient) {
    this.technologyURL = 'http://localhost:8080/stacktrace/technology';
   }

  /**
   * GETs all Technology objects from the backend.
   */
  getAllTechnology(): Promise<Technology[]> {
    return this.http.get<Technology[]>(this.technologyURL, { headers: this.httpHeaders }).toPromise();
  }

  /**
   * POSTs the given Technology object to the backend.
   */
  addTechnology(technology : Technology) {
    console.log(JSON.stringify(technology))
    return this.http.post<Technology>(this.technologyURL, technology);
  }
  /**
   * DELETEs the given Technology object from the backend.
   */
  deleteTechnology(technology: Technology): void {
    let t = this.http.delete<Technology>(this.apiServerUrl, { headers: this.httpHeaders });
    t.subscribe();
  }
}
