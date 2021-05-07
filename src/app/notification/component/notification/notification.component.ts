import {Component, OnInit} from '@angular/core';
import {Notification} from '../../model/notification';
import {NotificationService} from '../../service/notification.service';
import {User} from '../../../user/User';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllNotifications();
  }

  // tslint:disable-next-line:typedef
  getAllNotifications(): void {
    this.notificationService.getAllNotifications().subscribe(
      (response: any) => {
        this.notifications = response.content;
      });
  }

  // tslint:disable-next-line:typedef
  deleteNotification(notification: Notification) {
    this.notificationService.deleteByNotificationId(notification.id).subscribe();
  }

  deleteAllNotifications(id: number): void {
    this.notificationService.deleteAllNotificationsByUserId(id).subscribe();
  }

}
