import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';


@Injectable({
  providedIn: 'root'
})
export class BatchService {

  dev:string = 'http://localhost:9090';
  byBatchId:string = 'batches'

  constructor(
    private http:HttpClient
  ) { }

  getBatchById(id: string): Observable<Batch> {

    const url = `${this.dev}/${this.byBatchId}/${id}`;
    return this.http.get<Batch>(url);
  }

}
