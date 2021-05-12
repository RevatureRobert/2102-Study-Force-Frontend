import { Batch } from '../models/batch';
import { CreateUpdateBatch } from '../models/createUpdateBatch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * This service support all the CRUD functions relate to Batch Object
 * @author Anakin Kung
 */

@Injectable({
  providedIn: 'root',
})
/**
 * Service used for all CRUD operations related to batches
 * @author Steven Ceglarek
 * @author Lok Kan Kung
 */
export class BatchService {
  private apiUrl = environment.apiUrl;

  batches = 'batches'; // Specific endpoint to hit batches.
  deactivate = 'deactivateBatch'; // Specific endpoint to hit deactivateBatch.
  update = 'update'; // Specific endpoint to hit update.

  /**
   * This Model send only what is needed to create/update a batch, instead of the full Batch Object.
   */
  body: CreateUpdateBatch = {
    batchId: 0,
    name: '',
    instructors: [],
    users: [],
  };

  /**
   *
   * @param http The client for handling HTTP requests for this service.
   */
  constructor(private http: HttpClient) {}

  /**
   * GETs request to the backend.
   * @param id The ID for the batch, so in the url endpoint I can specify which batch I am looking for.
   * @returns Observable Batch object which the correct ID.
   */
  getBatchById(id: string): Observable<Batch> {
    const url = `${this.apiUrl}/${this.batches}/${id}`;
    return this.http.get<Batch>(url);
  }

  /**
   * This method update a Batch Object with the intended batchId.
   * @param id id of the batch.
   * @param name name of the batch.
   * @param instructorsEmail emails for all the instructors.
   * @param usersEmail emails for all the users.
   * @returns a Promise<any>
   */
  updateBatch(
    id: string,
    name: string,
    instructorsEmail: string[],
    usersEmail: string[]
  ): Promise<any> {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    const body = (this.body = {
      batchId: parseInt(id, 10),
      name,
      instructors: instructorsEmail,
      users: usersEmail,
    });

    const url = `${this.apiUrl}/${this.batches}`;
    return this.http.put<any>(url, body, requestOptions).toPromise();
  }

  /**
   *
   * @param id id of the batch.
   * @param name name of the batch.
   * @param instructorsEmail emails for all the instructors.
   * @param usersEmail emails for all the users.
   * @returns a Promise<Batch>
   */
  createBatch(
    id: string,
    name: string,
    instructorsEmail: string[],
    usersEmail: string[]
  ): Promise<Batch> {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    const body = (this.body = {
      batchId: parseInt(id, 10),
      name,
      instructors: instructorsEmail,
      users: usersEmail,
    });

    const url = `${this.apiUrl}/${this.batches}`;
    return this.http.post<Batch>(url, body, requestOptions).toPromise();
  }

  /**
   * DELETEs request to the backend.
   * @param id The ID for the batch to be deleted
   * @returns Promise Batch Object
   */
  deleteBatch(id: string): Promise<any> {
    const url = `${this.apiUrl}/${this.batches}/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

  /**
   * PUTs request to the backend.
   * @param id The ID for the batch to be deactivated
   * @returns Promise Batch Object
   */
  deactivateBatch(id: string): Promise<any> {
    const url = `${this.apiUrl}/${this.batches}/${this.deactivate}/${id}`;
    return this.http.put<any>(url, '').toPromise();
  }

  /**
   * Gets all batches with a user or instructor matching provided userId
   * @param userId The userId by which batches will be retrieved
   */
  getBatchesByMemberId(userId: number): Promise<any> {
    return this.http
      .get<any>(this.apiUrl.concat(`/batches/userid/${userId}`))
      .toPromise();
  }
}
