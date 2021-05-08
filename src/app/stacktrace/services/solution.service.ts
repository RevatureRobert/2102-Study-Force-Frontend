import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StacktraceHomeComponent } from '../components/stacktrace-home/stacktrace-home.component';
import { Solution } from '../models/solution'

@Injectable({
  providedIn: 'root'
})
export class SolutionService{

    // Set the headers
    httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": 'application/json'//,
      //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
    });

    // Appended the service endpoint to the base url
    apiServerUrl = environment.apiUrl.concat("/solution");

    constructor(private http: HttpClient){}

    getAllSolutions(stacktraceId: number): Promise<Solution[]> {
      return this.http.get<Solution[]>(`http://${this.apiServerUrl}/${stacktraceId}`, { headers: this.httpHeaders }).toPromise();
    }
}
