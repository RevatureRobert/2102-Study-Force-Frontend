import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stacktrace } from '../models/stacktrace';

/**
 * Provides methods for passing Stacktrace objects to and from the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class StacktraceService {

  // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  // Appended the service endpoint to the base url
  apiServerUrl = environment.apiUrl.concat("/stacktrace");

  /**
   * @param http The client for handeling HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * POSTs a Stacktrace to the backend
   */
  addStacktrace(stacktrace: Stacktrace): void {
        let r = this.http.post(this.apiServerUrl, stacktrace, { headers: this.httpHeaders });
        r.subscribe();
  }

  /**
   * GETs a Stacktrace from the backend
   */
  getStacktrace(id:number): Observable<Stacktrace> {
    return this.http.get<Stacktrace>(`${this.apiServerUrl}/${id}`, { headers: this.httpHeaders });
  }

  /**
   * GETs all Stacktraces from the backend
   */
  getAllStacktrace(): Promise<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(this.apiServerUrl, { headers: this.httpHeaders }).toPromise();
  }

  /**
   * PUTs a Stacktrace to the backend
   */
  editStacktrace(stacktrace: Stacktrace): void {
    let r = this.http.put(this.apiServerUrl, stacktrace, { headers: this.httpHeaders });
    r.subscribe();
  }

  /**
   * DELETEs a Stacktrace from the backend
   */
  deleteStacktrace(id:number):Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.apiServerUrl}/${id}`, { headers: this.httpHeaders });
  }
}
