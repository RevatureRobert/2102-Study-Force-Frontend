import { Component, Input, OnInit } from '@angular/core';
import { FlashcardSubscriptionDTO } from '../../model/flashcard-subscription-dto';
import { SubscribeBellFlashcardService } from '../../service/subscribe-bell-flashcard.service';

@Component({
  selector: 'app-subscribe-bell-flashcard',
  templateUrl: './subscribe-bell-flashcard.component.html',
  styleUrls: ['./subscribe-bell-flashcard.component.css']
})
export class SubscribeBellFlashcardComponent implements OnInit {
  @Input() flashcardId!:number;
  @Input() userId!:number;
  subscriptionStatus!:boolean;
  image!:string;
  sub:FlashcardSubscriptionDTO;

  constructor(private subscribeBell:SubscribeBellFlashcardService) {
    this.sub = {flashcardId: this.flashcardId, userId: this.userId};
   }

  ngOnInit(): void {
    this.getSubscriptionStatus(this.userId, this.flashcardId);
  }

  getSubscriptionStatus(userId:number, flashcardId:number):void{
    this.subscribeBell.getSubscription(userId, flashcardId).then(
      res => {if(res === null){this.subscriptionStatus = false; this.setBellImg();}else{this.subscriptionStatus = true; this.setBellFillImg();} console.log(res);},
      error => {console.log(error); this.subscriptionStatus = false; this.setBellImg();});
  }

  changeSubscriptionStatus():void{
    if(this.subscriptionStatus){
      this.removeSubscription(this.sub);
    }
    else{
      this.addSubscription(this.sub);
    }
  }

  addSubscription(sub:FlashcardSubscriptionDTO):void{
    this.subscribeBell.addSubscription(sub).then(
      res => { this.subscriptionStatus = true; this.setBellFillImg(); console.log(res);},
      error => {console.log(error)}
    );
  }

  removeSubscription(sub:FlashcardSubscriptionDTO):void{
    this.subscribeBell.removeSubscription(sub).then(
      res=> { this.subscriptionStatus = false; this.setBellImg(); console.log(res);},
      error => {console.log(error)}
    );
  }

  setBellFillImg():void{
    this.image = "assets/bell fill.svg";
  }

  setBellImg():void{
    this.image = "assets/bell.svg"
  }

}
