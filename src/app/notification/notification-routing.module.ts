import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationComponent} from './component/notification/notification.component';
import {NotificationPageComponent} from './component/notification-page/notification-page.component';

const routes: Routes = [
  {path: '', component: NotificationComponent},
  {path: 'notification-page', component: NotificationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NotificationRoutingModule {
}
