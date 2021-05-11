import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlashcardSubscriptionDTO } from 'src/app/notification/model/flashcard-subscription-dto';
import { FlashcardSubscription } from '../model/flashcard-subscription';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/*
* author: Patrick Gonzalez
* Fields
* url is the base endpoint that we use to make our http requests
*/
export class SubscribeBellFlashcardService {

  /*
  * http is used to make the http request to the backend
  */
  url:string = environment.apiUrl.concat("/subscriptions/flashcards");

  constructor(private http:HttpClient) { }

  /*
  * getSubscription returns a promise that contains the details of the flashcard subscription
  */
  getSubscription(userId:number, flashcardId:number):Promise<FlashcardSubscription>{
    let params = new HttpParams();
    params = params.append('flashcard-id', flashcardId.toString());
    params = params.append('user-id', userId.toString());

    return this.http.get<FlashcardSubscription>(this.url, {
      headers:{
        'Content-Type': 'application/json'
      },
      params:params
    }).toPromise<FlashcardSubscription>();
  }

  /*
  * addSubscription returns a promise that contains the subscription that was inserted
  */
  addSubscription(sub:FlashcardSubscriptionDTO):Promise<FlashcardSubscription>{
    return this.http.post<FlashcardSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<FlashcardSubscription>();
  }

  /*
  * removeSubscription returns a promise that contains the subscription that was removed
  */
  removeSubscription(sub:FlashcardSubscriptionDTO):Promise<FlashcardSubscription>{
    return this.http.request<FlashcardSubscription>('delete', this.url, {
      body: sub,
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<FlashcardSubscription>()
  }


}
