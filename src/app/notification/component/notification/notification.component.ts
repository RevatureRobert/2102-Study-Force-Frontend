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

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
