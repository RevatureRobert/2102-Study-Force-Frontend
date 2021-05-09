import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';
import { BASE_API_URL } from '../../../environments/environment';
import { NewBatch } from '../models/new-batch';



@Injectable({
  providedIn: 'root'
})
/**
 * Service used for all CRUD operations related to batches
 * @author Steven Ceglarek
 * @author Lok Kan Kung
 */
export class BatchService {

  byBatchId:string = 'batches'

  constructor(
    private http:HttpClient
  ) { }

  /**
   * To get a Batch by an id
   * @param id the id of the batch you want to get
   * @returns
   */
  getBatchById(id: string): Observable<Batch> {

    const url = `${BASE_API_URL}/${this.byBatchId}/${id}`;
    return this.http.get<Batch>(url);
  }

  /**
   * To get all of the batches in the database
   * @param pageSize the page size for pagination
   * @param pageNumber the page for pagination
   * @returns all batches
   */
  getBatches(pageSize:number = 25, pageNumber:number = 0) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<any>(BASE_API_URL.concat(`/batches`), requestOptions).toPromise();
  }

  /**
   * To create a new batch
   * @param batch the batch that is being created
   * @returns
   */
  createBatch(batch: NewBatch) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.post<any>(BASE_API_URL.concat("/batches"), batch, requestOptions).toPromise();
  }

  /**
   * Gets all batches with a user or instructor matching provided userId
   * @param userId The userId by which batches will be retrieved
   */
  getBatchesByMemberId(userId:number):Promise<any> {
    return this.http.get<any>(BASE_API_URL.concat(`/batches/userid/${userId}`)).toPromise();
  }
}
