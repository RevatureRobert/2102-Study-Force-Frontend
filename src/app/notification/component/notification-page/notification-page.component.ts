import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../service/notification.service';
import {Notification} from '../../model/notification';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe();
    this.getAllNotificationsInPage();
  }

  getAllNotificationsInPage(): void {
    this.notificationService.getAllNotificationsInPage().subscribe(
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

  pageRefresh(): void {
    window.location.reload();
  }

}
