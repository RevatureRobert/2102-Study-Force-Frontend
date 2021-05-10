import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../service/notification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

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
    this.getAllNotificationsInNavbar();
  }

  /*
  Getting All Notifications from notificationService
  Author: Ronald Lopez
   */
  getAllNotificationsInNavbar(): void {
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
  Method that refreshes the page
  Author: Ronald Lopez
   */
  pageRefresh(): void {
    window.location.reload();
  }
}
