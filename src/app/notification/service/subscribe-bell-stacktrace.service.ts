import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { StacktraceSubscription } from '../model/stacktrace-subscription';
import { StacktraceSubscriptionDTO } from '../model/stacktrace-subscription-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/*
* author: Patrick Gonzalez
* Fields
* url is the base endpoint that we use to make our http requests
*/
export class SubscribeBellStacktraceService {

  url:string = environment.apiUrl.concat("/subscriptions/stacktraces");

  /*
  * http is used to make the http request to the backend
  */
  constructor(private http:HttpClient) { }

  /*
  * getSubscription returns a promise that contains the details of the stacktrace subscription
  */
  getSubscription(userId:number, stacktraceId:number):Promise<StacktraceSubscription>{
    let params = new HttpParams();
    params = params.append('stacktrace-id', stacktraceId.toString());
    params = params.append('user-id', userId.toString());

    return this.http.get<StacktraceSubscription>(this.url, {
      headers:{
        'Content-Type': 'application/json'
      },
      params:params
    }).toPromise<StacktraceSubscription>();
  }

  /*
  * addSubscription returns a promise that contains the subscription that was inserted
  */
  addSubscription(sub:StacktraceSubscriptionDTO):Promise<StacktraceSubscription>{
    return this.http.post<StacktraceSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<StacktraceSubscription>();
  }

  /*
  * removeSubscription returns a promise that contains the subscription that was removed
  */
  removeSubscription(sub:StacktraceSubscriptionDTO):Promise<StacktraceSubscription>{
    return this.http.request<StacktraceSubscription>('delete', this.url, {
      body: sub,
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<StacktraceSubscription>()
  }


}
