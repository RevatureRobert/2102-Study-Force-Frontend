import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlashcardSubscriptionDTO } from 'src/app/notification/model/flashcard-subscription-dto';
import { FlashcardSubscription } from '../model/flashcard-subscription';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribeBellFlashcardService {

  url:string = environment.apiUrl.concat("/subscriptions/flashcards");

  constructor(private http:HttpClient) { }

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

  addSubscription(sub:FlashcardSubscriptionDTO):Promise<FlashcardSubscription>{
    return this.http.post<FlashcardSubscription>(this.url, sub, {
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<FlashcardSubscription>();
  }

  removeSubscription(sub:FlashcardSubscriptionDTO):Promise<FlashcardSubscription>{
    return this.http.request<FlashcardSubscription>('delete', this.url, {
      body: sub,
      headers:{
        'Content-Type': 'application/json'
      }
    }).toPromise<FlashcardSubscription>()
  }
}
