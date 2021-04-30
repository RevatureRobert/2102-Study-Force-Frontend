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

  private apiServerUrl = "placeholderUrl"; //BASE_API_URL;

  constructor(private http: HttpClient) { }

  addStacktrace(stacktrace: Stacktrace): void {
        let r = this.http.post(`${this.apiServerUrl}/stacktrace/create`, stacktrace, { headers: this.httpHeaders });
        r.subscribe();
  }
  getStacktrace(pageSize:number = 25, pageNumber:number = 0): Promise<any> {
    return this.http.get(this.apiServerUrl.concat(`/stacktrace/all?offset=${pageSize}&page=${pageNumber}`), { headers: this.httpHeaders }).toPromise();
  }
  getAllStacktrace(pageSize:number = 25, pageNumber:number = 0): Promise<any> {
    return this.http.get(this.apiServerUrl.concat(`/stacktrace/all?offset=${pageSize}&page=${pageNumber}`), { headers: this.httpHeaders }).toPromise();
  }
  editStacktrace(stacktrace: Stacktrace): void {
    let r = this.http.put(`${this.apiServerUrl}/stacktrace/update`, stacktrace, { headers: this.httpHeaders });
    r.subscribe();
  }
}
