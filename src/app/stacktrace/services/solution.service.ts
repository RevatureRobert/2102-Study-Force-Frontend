import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solution } from '../models/solution';
import { Vote } from '../models/vote';


@Injectable({
  providedIn: 'root'
})
export class SolutionService{

    // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": 'application/json'//,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });


  constructor(private http: HttpClient) {}

  // Appended the service endpoint to the base url
  apiServerUrl = environment.apiUrl.concat("/stacktrace/solution");
// stacktraceUrl = environment.apiUrl.concat("/stacktrace");
 // Appended the service endpoint to the base url

  getAllSolutionsByStacktraceId(stacktraceId: number, page: number, pageSize: number): Promise<Solution[]>{
    return this.http.get<Solution[]>(`http://${this.apiServerUrl}/${stacktraceId}?pageSize=${pageSize}&page=${page}`, { headers: this.httpHeaders }).toPromise();
  }

  postSolution(solution: Solution): Promise<Solution>{
    return this.http.post<Solution>(`http://${this.apiServerUrl}`, solution, {headers: this.httpHeaders}).toPromise();
  }
  
    /**
   * POSTs a Technology to the backend
   */
  addVote(vote: Vote, solution: Solution): Observable<Solution> {
    console.log(JSON.stringify(vote))
    this.http.post<Vote>(`${this.stacktraceUrl}/solution-vote`, vote).subscribe();
    return this.http.get<Solution>(`${this.stacktraceUrl}/solution/update-vote/${solution.solutionId}`);
  }
}
