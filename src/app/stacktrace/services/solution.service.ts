import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Solution } from '../models/solution';
import { Vote } from '../models/vote';

/**
 * Provides methods for sending Solution-related requests to the backend.
 */
@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  // Set the headers
  httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json', //,
  });

  /**
   * @param http the client for handling HTTP requests
   */
  constructor(private http: HttpClient) {}

  // Append the service endpoint to the base url
  stacktraceUrl = environment.apiUrl.concat('/stacktrace');

  /**
   * GETs all Solution objects attached to the stacktrace with the given ID.
   */
  getAllSolutionsByStacktraceId(
    stacktraceId: number,
    page: number,
    pageSize: number
  ): Promise<Solution[]> {
    return this.http
      .get<Solution[]>(
        `${this.stacktraceUrl}/solution/${stacktraceId}?pageSize=${pageSize}&page=${page}`,
        { headers: this.httpHeaders }
      )
      .toPromise();
  }

  /**
   * POSTs the given Solution object to the backend.
   */
  postSolution(solution: Solution): Promise<Solution> {
    return this.http
      .post<Solution>(`${this.stacktraceUrl}/solution`, solution, {
        headers: this.httpHeaders,
      })
      .toPromise();
  }

  /**
   * Adds a vote (either an upvote or downvote) to a Solution object.
   */
  addVote(vote: Vote): Observable<Vote> {
    return this.http
      .post<Vote>(`${this.stacktraceUrl}/solution-vote`, vote)
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'You have already voted on that solution.';
          return throwError(errorMessage);
        })
      );
  }

  /**
   * Updates the votes on the given Solution object.
   */
  updateVote(solution: Solution): Observable<Solution> {
    return this.http.get<Solution>(
      `${this.stacktraceUrl}/solution/update-vote/${solution.solutionId}`
    );
  }

  /**
   * DELETEs the given Solution object from the backend.
   */
  deleteSolution(solutionId: number): Observable<Solution> {
    return this.http.delete<Solution>(
      `${this.stacktraceUrl}/solution/${solutionId}`
    );
  }
}
