import {Component, OnInit} from '@angular/core';
import {Notification} from '../../model/notification';
import {NotificationService} from '../../service/notification.service';


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
    this.listNotifications();
  }


  // tslint:disable-next-line:typedef
  listNotifications() {
    this.notificationService.getNotifications().subscribe(
      data => {
        this.notifications = data;
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteNotification(notification: Notification) {
    this.notificationService.deleteByNotificationId(notification.notificationId).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
