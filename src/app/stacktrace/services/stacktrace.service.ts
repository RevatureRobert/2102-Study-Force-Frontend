import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private apiServerUrl = "http://localhost:8080"; //BASE_API_URL;

  constructor(private http: HttpClient) { }

  addStacktrace(stacktrace: Stacktrace): void {
        let r = this.http.post(`${this.apiServerUrl}/stacktrace/create`, stacktrace, { headers: this.httpHeaders });
        r.subscribe();
  }

  getStacktrace(id:number): Promise<Stacktrace> {
    return this.http.get<Stacktrace>(this.apiServerUrl.concat(`/stacktrace/${id}`), { headers: this.httpHeaders }).toPromise();
  }

  getAllStacktrace(): Promise<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(this.apiServerUrl.concat(`/stacktrace`), { headers: this.httpHeaders }).toPromise();
  }

  getPageStacktrace(pageSize:number, pageNumber:number): Promise<Stacktrace[]> {
    return this.http.get<Stacktrace[]>(this.apiServerUrl.concat(`/stacktrace/page?offset=${pageSize}&page=${pageNumber}`), { headers: this.httpHeaders }).toPromise();
  }

  editStacktrace(stacktrace: Stacktrace): void {
    let r = this.http.put(`${this.apiServerUrl}/stacktrace/update`, stacktrace, { headers: this.httpHeaders });
    r.subscribe();
  }
}
