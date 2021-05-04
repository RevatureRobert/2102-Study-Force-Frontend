import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotificationComponent} from './notification/component/notification/notification.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotificationService} from './notification/service/notification.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
