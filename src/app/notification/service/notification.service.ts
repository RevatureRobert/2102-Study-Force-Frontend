import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Notification} from '../model/notification';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private headerInfo = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  notifications!: Notification[];
  private baseUrl = 'http://localhost:8080/notifications';

  constructor(private httpClient: HttpClient) {
  }

  getAllNotifications(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  // tslint:disable-next-line:typedef
  deleteByNotificationId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
  }

  // tslint:disable-next-line:typedef
  deleteAllNotificationsByUserId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
  }
}

interface GetResponseNotifications {
  notifications: Notification[];
}
