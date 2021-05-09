import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationRoutingModule} from './notification-routing.module';
import {NotificationComponent} from './component/notification/notification.component';
import {NotificationPageComponent} from './component/notification-page/notification-page.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationPageComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
  ]
})
export class NotificationModule {
}
