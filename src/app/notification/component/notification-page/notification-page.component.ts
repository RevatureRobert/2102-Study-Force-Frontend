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

  /*
  @param Injecting notificationService
  @param Injecting activatedRoute
  Author: Ronald Lopez
   */
  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute) {
  }

  /*
  Initial routing
  Initial get all notification method
  Author: Ronald Lopez
   */
  ngOnInit(): void {
    this.route.params.subscribe();
    this.getAllNotificationsInPage();
  }

  /*
  Getting All Notifications from notificationService
  Author: Ronald Lopez
   */
  getAllNotificationsInPage(): void {
    this.notificationService.getAllNotifications().subscribe(
      (response: any) => {
        this.notifications = response.content;
      });
  }

  /*
  Deleting a specific Notification from notificationService
  Author: Ronald Lopez
   */
  // tslint:disable-next-line:typedef
  deleteNotification(notification: Notification) {
    this.notificationService.deleteByNotificationId(notification.id).subscribe();
  }

  /*
  Deleting all Notifications from notificationService
  Author: Ronald Lopez
   */
  deleteAllNotifications(id: number): void {
    this.notificationService.deleteAllNotificationsByUserId(id).subscribe();
  }

  /*
  Method that refreshes the page
  Author: Ronald Lopez
   */
  pageRefresh(): void {
    window.location.reload();
  }

}
