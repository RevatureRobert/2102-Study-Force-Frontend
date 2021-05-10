import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import {Notification} from './model/notification';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://localhost:8080/notifications';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
//   getNotifications(): Observable<Notification[]> {
//       return this.httpClient.get<GetResponseNotifications>(this.baseUrl).pipe(
//         map(response => response._embedded.notifications)
//     );
//   }

//   // tslint:disable-next-line:typedef
//   deleteByNotificationId(id: number) {
//     return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
//   }

// }

// interface GetResponseNotifications {
//   _embedded: {
//     notifications: Notification[];
//   };
}
