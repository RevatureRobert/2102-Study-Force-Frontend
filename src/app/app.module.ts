import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashcardModule } from './flashcard/flashcard.module';
import { FormsModule } from '@angular/forms';
import { StacktraceModule } from './stacktrace/stacktrace.module';
import { UserModule } from './user/user.module';
import {NotificationService} from './notification/service/notification.service';
import {NotificationComponent} from './notification/component/notification/notification.component';
import {SubscribeBellStacktraceComponent} from './notification/component/subscribe-bell-stacktrace/subscribe-bell-stacktrace.component'
import {SubscribeBellFlashcardComponent} from './notification/component/subscribe-bell-flashcard/subscribe-bell-flashcard.component';
import {SubscribeBellFlashcardService} from './notification/service/subscribe-bell-flashcard.service';
import {SubscribeBellStacktraceService} from './notification/service/subscribe-bell-stacktrace.service';


import { NotificationModule } from './notification/notification.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    SubscribeBellFlashcardComponent,
    SubscribeBellStacktraceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FlashcardModule,
    StacktraceModule,
    NotificationModule,
    UserModule,
    NgxPaginationModule
  ],
  providers: [
    SubscribeBellFlashcardService,
    SubscribeBellStacktraceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
