import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SwPush } from '@angular/service-worker';



@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subDetails:any;
  constructor(private http: HttpClient ,private push :SwPush) { }

  private serverPublicKeyBaseURL = "http://localhost:8080/";

  getPublicKey(): Observable<any> {
    return this.http.get(this.serverPublicKeyBaseURL + "publicSigningKey", { responseType: 'text' })
  }


/**
 * Post your subscription details to the database
 * @param sub
 * @returns
 */
postSubscriptionDetails(sub : any){
  const url = this.serverPublicKeyBaseURL + "subscriptions";


  const body = {
    id:11,
    endpoint: sub.endpoint,
    key : sub.toJSON().keys.p256dh ,
    auth : sub.toJSON().keys.auth ,
    userId : 8

  }
  console.log(body);
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  return this.http.post<number>(url,body,{'headers':headers});

}

/**
 * listen for notifications
 * This returns a observable because there are going to be more then more possible
 * notification sent
 */

  listenForNotifications(){
     return this.push.notificationClicks
  }

 /**
     * Request a subscription/ allow notifications from the user in the browser
     * It will use the key to ensure that when there are new notifications sent by the server
     * they will be received by the intended user
     */
requestSubscription(){

    /**
     * This is the VAPID public key used to decrypt the notification when you send it up to the
     * browser Server
     */
    const key = 'BEH36g-ez23QfnT8OIbnZJMmj892dDYa_LKyGz_wM2tyZbSt1YK4Jy1sRz1OyAeilAOBDrg-TnCBLFtWdVIApK8';
    this.push.requestSubscription({ serverPublicKey: key }).then(pushSubscription => {
     console.log(pushSubscription.toJSON())
     this.postSubscriptionDetails(pushSubscription).subscribe(data => this.subDetails = data);

    })
}

/**
 *
 * @returns This will true if the service worker is enabled
 */
isSubscribed(){
  return this.push.isEnabled;
}

/**
 *
 * @param id Will check if a user a subscription
 * @returns
 */
hasSubscription(id:number){
  return this.http.get<any>(this.serverPublicKeyBaseURL+`/subscriptions/${id}`).subscribe()
}

/**
 * Will either return the current the subscription or the users subscription already stored
 *
 * @param id
 * @returns
 */
getSubscriptionForUser(id:number){
  const temp = this.hasSubscription(id)
  if(temp === null ){
    return this.requestSubscription()
  }
  else {
    return temp
  }

}


}


