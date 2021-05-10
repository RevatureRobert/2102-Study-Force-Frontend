import { SubscribeBellFlashcardComponent } from './component/subscribe-bell-flashcard/subscribe-bell-flashcard.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationRoutingModule} from './notification-routing.module';
import {NotificationComponent} from './component/notification/notification.component';
import {NotificationPageComponent} from './component/notification-page/notification-page.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationPageComponent,
    SubscribeBellFlashcardComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ],
    
})
export class NotificationModule {
}
