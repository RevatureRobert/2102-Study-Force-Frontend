import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './global-components/shared.module';

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
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    SubscribeBellFlashcardComponent,
    SubscribeBellStacktraceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
    FlashcardModule,
    StacktraceModule,
    UserModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    SubscribeBellFlashcardService,
    SubscribeBellStacktraceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
