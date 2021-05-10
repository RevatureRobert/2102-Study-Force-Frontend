import { Batch } from './../models/batch';
import { CreateUpdateBatch } from './../models/createUpdateBatch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';
import { BASE_API_URL } from '../../../environments/environment';
import { NewBatch } from '../models/new-batch';
import { NewEmployeeBatch } from '../models/new-employee-batch';

/**
 * This service support all the CRUD functions relate to Batch Object
 * @author Anakin Kung
 */

@Injectable({
  providedIn: 'root'
})
/**
 * Service used for all CRUD operations related to batches
 * @author Steven Ceglarek
 * @author Lok Kan Kung
 */
export class BatchService {

  dev:string = 'http://localhost:8080';  // Base dev url to hit endpoint.
  batches:string = 'batches'; // Specfic endpoint to hit batches.
  deactivate:string ='deactivateBatch'; // Specific endpoint to hit deactivateBatch.
  update:string ='update'; // Specific endpoint to hit update.

/**
 * This Model send only what is needed to create/update a batch, instead of the full Batch Object.
 */
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
   * This method update a Batch Object with the intended batchId.
   * @param id id of the batch.
   * @param name name of the batch.
   * @param instructorsEmail emails for all the instructors.
   * @param usersEmail emails for all the users.
   * @returns a Promise<any>
   */
  updateBatch(id: string, name: string, instructorsEmail:string[], usersEmail:string[]): Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

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
   *
   * @param id id of the batch.
   * @param name name of the batch.
   * @param instructorsEmail emails for all the instructors.
   * @param usersEmail emails for all the users.
   * @returns a Promise<Batch>
   */
  createBatch(id: string,name: string, instructorsEmail:string[], usersEmail:string[]): Promise<Batch>{
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    const body = this.body = {
      batchId: parseInt(id),
      name: name,
      instructors: instructorsEmail,
      users: usersEmail
    }

    const url =`${this.dev}/${this.batches}`
    console.log(body);
    return this.http.post<Batch>(url,body,requestOptions).toPromise();
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

  /**
   * Gets all batches with a user or instructor matching provided userId
   * @param userId The userId by which batches will be retrieved
   */
  getBatchesByMemberId(userId:number):Promise<any> {
    return this.http.get<any>(BASE_API_URL.concat(`/batches/userid/${userId}`)).toPromise();
  }

}
