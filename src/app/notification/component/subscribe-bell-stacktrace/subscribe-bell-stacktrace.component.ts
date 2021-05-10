import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { StacktraceSubscriptionDTO } from '../../model/stacktrace-subscription-dto';
import { SubscribeBellStacktraceService } from '../../service/subscribe-bell-stacktrace.service';
import { SubscriptionService } from '../../service/SubscriptionService';

@Component({
  selector: 'app-subscribe-bell-stacktrace',
  templateUrl: './subscribe-bell-stacktrace.component.html',
  styleUrls: ['./subscribe-bell-stacktrace.component.css']
})
export class SubscribeBellStacktraceComponent implements OnInit {

  subscriptionStatus!:boolean;
  image!:string;
  sub:StacktraceSubscriptionDTO;
  constructor(private subscribeBell:SubscribeBellStacktraceService ,private subscriptionService:SubscriptionService) {
    this.sub = {stacktraceId: 34, userId: 1};

    subscriptionService.requestSubscription();




   }

  ngOnInit(): void {
    this.getSubscriptionStatus(1, 1);
  }

  getSubscriptionStatus(userId:number, stacktraceId:number):void{
    this.subscribeBell.getSubscription(userId, stacktraceId).then(
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

  addSubscription(sub:StacktraceSubscriptionDTO):void{
    if(!this.subscriptionService.hasSubscription(1)){
      this.subscriptionService.requestSubscription();
    }
    else {
      console.log("Already has subscription");
    }
    console.log(sub);
    this.subscribeBell.addSubscription(sub).then(
      res => { this.subscriptionStatus = true; this.setBellFillImg(); console.log(res);},
      error => {console.log(error)}
    );
  }

  removeSubscription(sub:StacktraceSubscriptionDTO):void{
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
