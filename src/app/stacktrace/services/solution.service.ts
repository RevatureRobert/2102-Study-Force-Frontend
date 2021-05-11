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
    'Content-Type': 'application/json'// ,
    //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
  });

  constructor(private http: HttpClient) {}

  // Appended the service endpoint to the base url
  stacktraceUrl = environment.apiUrl.concat('/stacktrace');

  getAllSolutionsByStacktraceId(stacktraceId: number, page: number, pageSize: number): Promise<Solution[]>{
    return this.http.get<Solution[]>(`${this.stacktraceUrl}/solution/${stacktraceId}?pageSize=${pageSize}&page=${page}`, { headers: this.httpHeaders }).toPromise();
  }

  postSolution(solution: Solution): Promise<Solution>{
    return this.http.post<Solution>(`${this.stacktraceUrl}/solution`, solution, {headers: this.httpHeaders}).toPromise();
  }

  addVote(vote: Vote): Observable<Vote> {
    console.log(JSON.stringify(vote));
    return this.http.post<Vote>(`${this.stacktraceUrl}/solution-vote`, vote);
  }

  updateVote(solution: Solution): Observable<Solution>{
    return this.http.get<Solution>(`${this.stacktraceUrl}/solution/update-vote/${solution.solutionId}`);
  }

  deleteSolution(solutionId: number): Observable<Solution>{
    return this.http.delete<Solution>(`${this.stacktraceUrl}/solution/${solutionId}`)
  }
}
