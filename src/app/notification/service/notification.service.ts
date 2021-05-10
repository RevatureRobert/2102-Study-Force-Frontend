import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Notification} from '../model/notification';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NotificationPage} from "../model/notification.page";


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

  constructor(private httpClient: HttpClient) {
  }

  /*
Gets all notifications endpoint from the backend based on user id
 */
  getAllNotificationsInNavbar(): Observable<any> {
    return this.httpClient.get(`${(this.baseUrl)}/users/${1}`);
  }

  /*
  Gets all notifications endpoint from the backend based on user id
   */
  getAllNotificationsInPage(): Observable<any> {
    return this.httpClient.get(`${(this.baseUrl)}/users/${1}`);
  }

  /*
  Deletes a notification endpoint at the backend based on notification id
 */
  deleteByNotificationId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
  }

  /*
  Endpoint to delete all notifications in the backend based on user id
   */
  deleteAllNotificationsByUserId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/users/${id}`);
  }
}
