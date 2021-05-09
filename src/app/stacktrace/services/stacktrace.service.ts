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
    this.stacktraceURL = 'http://localhost:8080/stacktrace/';
   }

   public save(stacktrace: Stacktrace) {
    console.log(JSON.stringify(stacktrace))
    return this.http.post<Stacktrace>(this.stacktraceURL, stacktrace);
  }

  getStacktrace(id:any): Observable<Stacktrace> {
    return this.http.get(`${this.stacktraceURL}/${id}`);
  }



//  getAllStacktrace(): Promise<Stacktrace[]> {
  //  return this.http.get<Stacktrace[]>(`${this.apiServerUrl}/stacktrace`, { headers: this.httpHeaders }).toPromise();
  //}

  public findAll(params :any): Observable<any> {
    return this.http.get<any>(this.stacktraceURL, {params});
  }

  //Backend PUT mapping isn't created yet
  editStacktrace( id:any , data : any): Observable<any> {
    return this.http.put(`${this.stacktraceURL}/${id}`, data);
  }

  deleteStacktrace(id:any):Observable<Stacktrace> {
    return this.http.delete<Stacktrace>(`${this.stacktraceURL}/${id}`, { headers: this.httpHeaders });
  }

  findByTitle(title:any): Observable<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(`${this.stacktraceURL}?title=${title}`);
  }

  findByTitleAndTechnology(title:any, technologyId: number, page: number): Observable<any> {
    return this.http.get<Stacktrace[]>(`${this.stacktraceURL}/search?title=${title}&technologyId=${technologyId}&page=${page}`);
  }
}
