
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe();
    this.getAllNotificationsInNavbar();
  }

  getAllNotificationsInNavbar(): void {
    this.notificationService.getAllNotificationsInNavbar().subscribe(
      (response: any) => {
        this.notifications = response.content;
      });
  }

  // tslint:disable-next-line:typedef
  deleteNotification(notification: Notification) {
    this.notificationService.deleteByNotificationId(notification.id).subscribe();
  }

  pageRefresh(): void {
    window.location.reload();
  }


}
