import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stacktrace } from '../models/stacktrace';

@Injectable({
  providedIn: 'root'
})
export class StacktraceService {

  private stacktraceURL :string;

  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.stacktraceURL = 'http://localhost:8080/stacktrace';
   }

   public save(stacktrace: Stacktrace) {
    console.log(JSON.stringify(stacktrace))
    return this.http.post<Stacktrace>(this.stacktraceURL, stacktrace);
  }

  getStacktrace(id:number): Observable<Stacktrace> {
    return this.http.get<Stacktrace>(`${this.apiServerUrl}/stacktrace/${id}`, { headers: this.httpHeaders });
  }

//  getAllStacktrace(): Promise<Stacktrace[]> {
  //  return this.http.get<Stacktrace[]>(`${this.apiServerUrl}/stacktrace`, { headers: this.httpHeaders }).toPromise();
  //}

  public findAll(): Observable<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(this.stacktraceURL);
  }

  //Backend PUT mapping isn't created yet
  editStacktrace(stacktrace: Stacktrace): void {
    let r = this.http.put(`${this.apiServerUrl}/stacktrace`, stacktrace, { headers: this.httpHeaders });
    r.subscribe();
  }

  deleteStacktrace(id:number):Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.apiServerUrl}/stacktrace/${id}`, { headers: this.httpHeaders });
  }

  findByTitle(title:any): Observable<any> {
    return this.http.get(`${this.stacktraceURL}?title=${title}`);
  }
}
