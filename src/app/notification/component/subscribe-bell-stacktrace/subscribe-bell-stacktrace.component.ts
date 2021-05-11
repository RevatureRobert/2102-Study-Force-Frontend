import { Component, Input, OnInit } from '@angular/core';
import { StacktraceSubscriptionDTO } from '../../model/stacktrace-subscription-dto';
import { SubscribeBellStacktraceService } from '../../service/subscribe-bell-stacktrace.service';

/**
 * author: Patrick Gonzalez
 *
 * Fields
 * stacktraceId is the id of the stacktrace that the subscription bell is attached to
 * userId is the id of the user currently logged in
 * subscriptionStatus is true if the user is subscribed to the flashcard and is false if the user is not
 * image is the image that we use fo the Bell
 * sub is the subscription variable we use to add or remove the subscription
 */
@Component({
  selector: 'app-subscribe-bell-stacktrace',
  templateUrl: './subscribe-bell-stacktrace.component.html',
  styleUrls: ['./subscribe-bell-stacktrace.component.css']
})
export class SubscribeBellStacktraceComponent implements OnInit {
  @Input() stacktraceId!:number;
  @Input() userId!:number;
  subscriptionStatus!:boolean;
  image!:string;
  sub:StacktraceSubscriptionDTO;

  /**
   * @param subscribeBell is the service we use to make http requests to the backend
   * sub is set in the constructor in order to make it available
   */
  constructor(private subscribeBell:SubscribeBellStacktraceService) {
    this.sub = {stacktraceId: this.stacktraceId, userId: this.userId};
   }
   /**
    * On the intialization of this component we call getSubscriptionStatus()
    */
  ngOnInit(): void {
    this.getSubscriptionStatus(this.userId, this.stacktraceId);
  }
/**
 * getSubscriptionStatus tells us if the user was already previously subscribed or not
 * If the user is subscribed then we make sure to show the bell fill image and we set subscriptionStatus to true
 * Otherwise we show the bell image and set the subscriptionStatus to false
 * @param userId is the of the user currently logged in
 *
 * @param flashcardId is the id of the flashcard that the user interested in
 */
  getSubscriptionStatus(userId:number, stacktraceId:number):void{
    this.subscribeBell.getSubscription(userId, stacktraceId).then(
      res => {if(res === null){this.subscriptionStatus = false; this.setBellImg();}else{this.subscriptionStatus = true; this.setBellFillImg();} console.log(res);},
      error => {console.log(error); this.subscriptionStatus = false; this.setBellImg();});
  }
  /**
   * changeSubscriptionStatus is called when the user clicks the bell
   * Then we either unsubscribe the user or subscribe the user depending on subscriptionStatus
   */
  changeSubscriptionStatus():void{
    if(this.subscriptionStatus){
      this.removeSubscription(this.sub);
    }
    else{
      this.addSubscription(this.sub);
    }
  }
/**
 * addSubscription subscribes the user to the flashcard
 * @param sub is the subscription we want to add
 */
  addSubscription(sub:StacktraceSubscriptionDTO):void{
    console.log(sub);
    this.subscribeBell.addSubscription(sub).then(
      res => { this.subscriptionStatus = true; this.setBellFillImg(); console.log(res);},
      error => {console.log(error)}
    );
  }
/**
 * removeSubscription unsubscribes the user form the flashcard
 * @param sub is the subscription we want to remove
 */
  removeSubscription(sub:StacktraceSubscriptionDTO):void{
    this.subscribeBell.removeSubscription(sub).then(
      res=> { this.subscriptionStatus = false; this.setBellImg(); console.log(res);},
      error => {console.log(error)}
    );
  }
  /*
  * setBillFillImg makes the bell fill image be displayed
  */
  setBellFillImg():void{
    this.image = "assets/bell fill.svg";
  }
  /*
  * setBillImg makes the bell fill image be displayed
  */
  setBellImg():void{
    this.image = "assets/bell.svg"
  }
}
