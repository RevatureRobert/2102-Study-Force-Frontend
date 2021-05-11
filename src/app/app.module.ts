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
import { NotificationModule } from './notification/notification.module';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SubscribeBellFlashcardComponent } from 'src/app/notification/component/subscribe-bell-flashcard/subscribe-bell-flashcard.component';
import { SubscribeBellFlashcardService } from 'src/app/notification/service/subscribe-bell-flashcard.service';



@NgModule({
  declarations: [
    AppComponent,
    SubscribeBellFlashcardComponent
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
    ServiceWorkerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    SubscribeBellFlashcardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(push:SwPush){
    push.notificationClicks.subscribe(msg => {
      console.log(msg);
    })
  }
}
