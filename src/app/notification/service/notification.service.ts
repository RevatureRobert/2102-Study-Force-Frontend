import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
<<<<<<< HEAD
import {map} from 'rxjs/operators';
=======
import {Notification} from '../model/notification';
>>>>>>> notification
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications!: Notification[];
  private headerInfo = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private baseUrl = 'http://localhost:8080/notifications';

  /*
@param httpClient
Injecting the HttpClient object to notificationService
Author: Ronald Lopez
*/
  constructor(private httpClient: HttpClient) {
  }

  /*
  returns all notifications endpoint from the backend based on user id
  Author: Ronald Lopez
   */
  getAllNotifications(): Observable<any> {
    return this.httpClient.get(`${(this.baseUrl)}/users/${1}`);
  }

  /*
  @param id: number
  @return httpClient to delete a notification by id
  Deletes a notification endpoint at the backend based on notification id
  Author: Ronald Lopez
 */
  deleteByNotificationId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
  }

  /*
  @param id: number
  @return httpClient to delete a notification by id
  Deletes all notifications based on user id
  Author: Ronald Lopez
 */
  deleteAllNotificationsByUserId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/users/${id}`);
  }
}
