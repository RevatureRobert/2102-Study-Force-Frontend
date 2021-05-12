import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionServiceService {

  constructor(private http:HttpClient,private push:SwPush) { }


/**
 * Post your subscription details to the database
 * @param sub
 * @returns
 */
 postSubscriptionDetails(sub : any){
  const url = environment.apiUrl + "subscriptions";


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

requestSubscription(){

  /**
   * This is the VAPID public key used to decrypt the notification when you send it up to the
   * browser Server
   */
  const key = 'BEH36g-ez23QfnT8OIbnZJMmj892dDYa_LKyGz_wM2tyZbSt1YK4Jy1sRz1OyAeilAOBDrg-TnCBLFtWdVIApK8';
  this.push.requestSubscription({ serverPublicKey: key }).then(pushSubscription => {
   console.log(pushSubscription.toJSON())
  this.postSubscriptionDetails(pushSubscription).subscribe();

  })
}
hasSubscription(id:number){
  if(this.http.get<any>(environment.apiUrl+`/subscriptions/${id}`).subscribe()===null){
    return false;
  }
  else {
    return true;
  }
}


}
