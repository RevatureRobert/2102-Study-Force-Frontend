import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationRoutingModule} from './notification-routing.module';
import {NotificationComponent} from './component/notification/notification.component';
import {NotificationPageComponent} from './component/notification-page/notification-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CommonModule,
    NotificationRoutingModule,
    NotificationComponent,
    NotificationPageComponent,
    NgbModule
  ],
})
export class NotificationModule {
}
