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
    'Content-Type': 'application/json'};

  notifications!: Notification[];
  private baseUrl = 'http://localhost:8080/notifications';

  constructor(private httpClient: HttpClient) {
  }

  getAllNotifications(): Observable<any> {
    return this.httpClient.get(`${(this.baseUrl)}/users/${2}`);
  }

  deleteByNotificationId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/${id}`);
  }

  deleteAllNotificationsByUserId(id: number): Observable<any> {
    return this.httpClient.delete(`${(this.baseUrl)}/users/${id}`);
  }
}
