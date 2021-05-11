import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { StacktraceSubscription } from '../model/stacktrace-subscription';
import { StacktraceSubscriptionDTO } from '../model/stacktrace-subscription-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribeBellStacktraceService {

  url:string = environment.apiUrl.concat("/subscriptions/stacktraces");

  constructor(private http:HttpClient) { }

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

  addSubscription(sub:StacktraceSubscriptionDTO):Promise<StacktraceSubscription>{
    return this.http.post<StacktraceSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<StacktraceSubscription>();
  }

  removeSubscription(sub:StacktraceSubscriptionDTO):Promise<StacktraceSubscription>{
    return this.http.request<StacktraceSubscription>('delete', this.url, {
      body: sub,
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<StacktraceSubscription>()
  }
}
