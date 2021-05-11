import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlashcardSubscriptionDTO } from 'src/app/notification/model/flashcard-subscription-dto';
import { FlashcardSubscription } from '../model/flashcard-subscription';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * author: Patrick Gonzalez
 * Fields
 * url is the base endopint that we use to make our http requests
 */
@Injectable({
  providedIn: 'root'
})
export class SubscribeBellFlashcardService {

  url:string = environment.apiUrl.concat("/subscriptions/flashcards");

  /**
   *
   * @param http is used to make the http request to the backend
   */
  constructor(private http:HttpClient) { }

/**
 *
 * @param userId is the id of the user logged in
 * @param flashcardId is the id of the flashcard the user is interested in
 * @returns Promise<FlashcardSubscription> This promise contains the details of the flashcard subscription
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

/**
 *
 * @param sub is the subscription that we want to add
 * @returns Promise<FlashcardSubscription> This promise contains the details of the subscription we add
 */
  addSubscription(sub:FlashcardSubscriptionDTO):Promise<FlashcardSubscription>{
    return this.http.post<FlashcardSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<FlashcardSubscription>();
  }

/**
 *
 * @param sub is the subscription that we want to remove
 * @returns Promise<FlashcardSubscription> This promise contains the details of the subscription we remove
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
