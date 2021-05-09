import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';

/**
 * Provides methods for passing Batch objects to and from the backend.
 */

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  dev:string = 'http://localhost:9090';  // Base dev url to hit endpoint
  batches:string = 'batches'; // Specfic endpoint to hit batches
  deactivate:string ='deactivateBatch';
  update:string ='update';

  /**
   *
   * @param http The client for handling HTTP requests for this service.
   */
  constructor(
    private http:HttpClient
  ) { }

  /**
   * GETs request to the backend.
   * @param id The ID for the batch, so in the url endpoint I can specify which batch I am looking for.
   * @returns Observable Batch object which the correct ID.
   */
  getBatchById(id: string): Observable<Batch> {

    const url = `${this.dev}/${this.batches}/${id}`;
    return this.http.get<Batch>(url);
  }

  /**
   * PUTs request to the backend.
   * @param id The ID for the batch to be updated
   * @param batch The Batch Object that is replacing the current one in the database
   * @returns Promise Batch Object
   */
  updateBatch(id: string, batch: Batch): Promise<Batch> {
    const body: string = `{
      "batchId": ${id},
      "name": ${batch.name},
      "instructors": ${batch.instructors},
      "users": ${batch.users},
      "creationTime": ${batch.creationTime}}`;

    const url =`${this.dev}/${this.batches}/${this.update}`
    return this.http.put<Batch>(url,body).toPromise();
  }

  /**
   * DELETEs request to the backend.
   * @param id The ID for the batch to be deleted
   * @returns Promise Batch Object
   */
  deleteBatch(id: string): Promise<Batch> {
    const url = `${this.dev}/${this.batches}/${id}`;
    return this.http.delete<Batch>(url).toPromise();
  }

  /**
   * PUTs request to the backend.
   * @param id The ID for the batch to be deactivated
   * @returns Promise Batch Object
   */
  deactivateBatch(id: string): Promise<Batch> {
    const body: string = `{
      "batchId": ${id}}`;
    const url = `${this.dev}/${this.batches}/${this.deactivate}`;
    return this.http.put<Batch>(url,body).toPromise();
  }

}
