import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';


@Injectable({
  providedIn: 'root'
})
export class BatchService {

  dev:string = 'http://localhost:8080/batch';
  byBatchId:string = 'batch'

  constructor(
    private http:HttpClient
  ) { }

  getBatchById(): Observable<Batch> {
    // let id = localStorage.getItem("")
    let id = 3;
    const url = `${this.dev}/${this.byBatchId}/${id}`;
    return this.http.get<Batch>(url);
  }

}
