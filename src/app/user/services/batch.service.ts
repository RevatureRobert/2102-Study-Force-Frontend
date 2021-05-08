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
  byBatchId:string = 'batches' // Specfic endpoint to hit batches

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

    const url = `${this.dev}/${this.byBatchId}/${id}`;
    return this.http.get<Batch>(url);
  }

}
