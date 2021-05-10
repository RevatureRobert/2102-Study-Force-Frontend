import { CreateUpdateBatch } from './../models/createUpdateBatch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';
import { BASE_API_URL } from 'src/environments/environment';

/**
 * Provides methods for passing Batch objects to and from the backend.
 */

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  dev:string = 'http://localhost:8080';  // Base dev url to hit endpoint
  batches:string = 'batches'; // Specfic endpoint to hit batches
  deactivate:string ='deactivateBatch';
  update:string ='update';

  body: CreateUpdateBatch = {
    batchId: 0,
    name: "",
    instructors: [],
    users: []
  }


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
  updateBatch(id: string, name: string, instructorsEmail:string[], usersEmail:string[]): Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    // const body: string =
    // `{
    //   "batchId": ${id},
    //   "name": "${name}",
    //   "instructors": [${instructorsEmail}],
    //   "users": [${usersEmail}]
    //   }`;

    const body = this.body = {
        batchId: parseInt(id),
        name: name,
        instructors: instructorsEmail,
        users: usersEmail
      }

    const url =`${this.dev}/${this.batches}`
    console.log(body);
    return this.http.put<any>(url,body,requestOptions).toPromise();
  }

  /**
   * DELETEs request to the backend.
   * @param id The ID for the batch to be deleted
   * @returns Promise Batch Object
   */
  deleteBatch(id: string): Promise<any>{

    const url = `${this.dev}/${this.batches}/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

  /**
   * PUTs request to the backend.
   * @param id The ID for the batch to be deactivated
   * @returns Promise Batch Object
   */
  deactivateBatch(id: string): Promise<any>{



    const url = `${this.dev}/${this.batches}/${this.deactivate}/${id}`;
    return this.http.put<any>(url,"").toPromise();
  }



}
