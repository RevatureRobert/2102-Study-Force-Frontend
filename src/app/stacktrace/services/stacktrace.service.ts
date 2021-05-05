import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { BASE_API_URL} from 'src/environments/environment';
import { Stacktrace } from '../models/stacktrace';

@Injectable({
  providedIn: 'root'
})
export class StacktraceService {

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  apiServerUrl = "http://localhost:8080"; //BASE_API_URL;

  constructor(private http: HttpClient) { }

  addStacktrace(stacktrace: Stacktrace): void {
        let r = this.http.post(`${this.apiServerUrl}/stacktrace`, stacktrace, { headers: this.httpHeaders });
        r.subscribe();
  }

  getStacktrace(id:number): Observable<Stacktrace> {
    return this.http.get<Stacktrace>(`${this.apiServerUrl}/stacktrace/${id}`, { headers: this.httpHeaders });
  }

  getAllStacktrace(): Promise<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(`${this.apiServerUrl}/stacktrace`, { headers: this.httpHeaders }).toPromise();
  }

  //Backend PUT mapping isn't created yet
  editStacktrace(stacktrace: Stacktrace): void {
    let r = this.http.put(`${this.apiServerUrl}/stacktrace`, stacktrace, { headers: this.httpHeaders });
    r.subscribe();
  }

  deleteStacktrace(id:number):Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.apiServerUrl}/stacktrace/${id}`, { headers: this.httpHeaders });
  }
}
