import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Technology } from '../models/technology';

/**
 * Provides methods for sending Technology-related requests to the backend.
 */
@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  private technologyURL: string;

  // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json', //,
  });

  // Append the service endpoint to the base url
  apiServerUrl = environment.apiUrl.concat('/stacktrace/technology');

  /**
   * @param http the client for handling HTTP requests
   */
  constructor(private http: HttpClient) {
    this.technologyURL = this.apiServerUrl;
  }

  /**
   * GETs all Technology objects from the backend.
   */
  getAllTechnology(): Promise<Technology[]> {
    return this.http
      .get<Technology[]>(this.technologyURL, { headers: this.httpHeaders })
      .toPromise();
  }

  /**
   * POSTs the given Technology object to the backend.
   */
  addTechnology(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.technologyURL, technology);
  }
  /**
   * DELETEs the given Technology object from the backend.
   */
  deleteTechnology(technologyId: number): Observable<Technology> {
    return this.http
      .delete<Technology>(`${this.apiServerUrl}/${technologyId}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMessage =
            'You should edit this technology instead, its connected to Stacktraces already.';
          return throwError(errorMessage);
        })
      );
  }

  editTechnology(technology: Technology): Observable<Technology> {
    return this.http.put<Technology>(this.technologyURL, technology);
  }
}
