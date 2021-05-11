import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { StacktraceSubscription } from '../model/stacktrace-subscription';
import { StacktraceSubscriptionDTO } from '../model/stacktrace-subscription-dto';
import { environment } from 'src/environments/environment';

/**
 * author: Patrick Gonzalez
 * Fields
 * url is the base endopint that we use to make our http requests
 */
@Injectable({
  providedIn: 'root'
})
export class SubscribeBellStacktraceService {

  url:string = environment.apiUrl.concat("/subscriptions/stacktraces");

  /**
   *
   * @param http is used to make the http request to the backend
   */
  constructor(private http:HttpClient) { }

/**
 *
 * @param userId is the id of the user logged in
 * @param stacktraceId is the id of the stacktrace the user is interested in
 * @returns Promise<FlashcardSubscription> This promise contains the details of the stacktrace subscription
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

 /**
 *
 * @param sub is the subscription that we want to add
 * @returns Promise<StacktraceSubscription> This promise contains the details of the subscription we add
 */
  addSubscription(sub:StacktraceSubscriptionDTO):Promise<StacktraceSubscription>{
    return this.http.post<StacktraceSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<StacktraceSubscription>();
  }

 /**
 *
 * @param sub is the subscription that we want to remove
 * @returns Promise<StacktraceSubscription> This promise contains the details of the subscription we remove
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
