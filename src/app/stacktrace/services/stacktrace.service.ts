import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stacktrace } from '../models/stacktrace';

@Injectable({
  providedIn: 'root'
})
export class StacktraceService {

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  stacktraceURL: string = 'http://localhost:8080/stacktrace';

  constructor(private http: HttpClient) {
  }

   save(stacktrace: Stacktrace) {
    console.log(JSON.stringify(stacktrace))
    return this.http.post<Stacktrace>(this.stacktraceURL, stacktrace);
  }

  /**
   * GETs a Stacktrace from the backend
   */
  getStacktrace(id:any): Observable<Stacktrace> {
    return this.http.get(`${this.stacktraceURL}/${id}`);
  }

  public findAll(params :any): Observable<any> {
    return this.http.get<any>(this.stacktraceURL, {params});
  }

  // Backend PUT mapping isn't created yet
  editStacktrace( id:any , data : any): Observable<any> {
    return this.http.put(`${this.stacktraceURL}/${id}`, data);
  }

  deleteStacktrace(id:any):Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.stacktraceURL}/${id}`, { headers: this.httpHeaders });
  }

  findByTitle(title:any): Observable<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(`${this.stacktraceURL}?title=${title}`);
  }
}
