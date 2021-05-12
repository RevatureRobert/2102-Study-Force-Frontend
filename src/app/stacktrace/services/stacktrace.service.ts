import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stacktrace } from '../models/stacktrace';

/**
 * Provides methods for sending Stacktrace-related requests to the backend.
 */
@Injectable({
  providedIn: 'root',
})
export class StacktraceService {
  private stacktraceURL: string = environment.apiUrl.concat('/stacktrace');

  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json', //,
  });

  /**
   * @param http the client for handling HTTP requests
   */
  constructor(private http: HttpClient) {}

  /**
   * POSTs the given Stacktrace object to the backend.
   */
  save(stacktrace: Stacktrace) {
    return this.http.post<Stacktrace>(this.stacktraceURL, stacktrace);
  }

  /**
   * GETs the given Stacktrace object from the backend.
   */
  getStacktrace(id: any): Observable<Stacktrace> {
    return this.http.get<Stacktrace>(`${this.stacktraceURL}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  /**
   * GETs a number of Stacktrace objects from the backend, depending on the given parameter.
   *
   * @param params the parameters to search by, if any. All stacktraces will be retrieved if this is null.
   */
  public findAll(params: any): Observable<any> {
    return this.http.get<any>(this.stacktraceURL, { params });
  }

  /**
   * Updates the given Stacktrace object with the data provided.
   *
   * @param data the values with which to update the stacktrace.
   */
  editStacktrace(id: any, data: any): Observable<any> {
    return this.http.put(`${this.stacktraceURL}/${id}`, data);
  }

  /**
   * DELETEs the given Stacktrace object from the backend.
   */
  deleteStacktrace(id: any): Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.stacktraceURL}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  /**
   * GETs the Stacktrace object with the given title, technology, and page number from the backend.
   */
  findByTitleAndOrTechnology(params: any): Observable<any> {
    return this.http.get<Stacktrace[]>(`${this.stacktraceURL}/search`, {
      params,
    });
  }

  /**
   * GETs the Stacktrace object together with the chosen solution from the backend.
   */
  chosenSolution(
    solutionId: number,
    stacktraceId: number
  ): Observable<Stacktrace> {
    return this.http.get<Stacktrace>(
      `${this.stacktraceURL}/chosen-solution?solutionId=${solutionId}&stacktraceId=${stacktraceId}`
    );
  }
}
