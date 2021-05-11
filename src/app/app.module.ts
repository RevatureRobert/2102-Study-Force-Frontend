import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FlashcardModule } from './flashcard/flashcard.module';
import { FormsModule } from '@angular/forms';
import { StacktraceModule } from './stacktrace/stacktrace.module';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import {SharedModule} from './shared.module';
import {HomeComponent} from './home-component/home/home.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SharedModule,
    FlashcardModule,
    StacktraceModule,
    NotificationModule,
    UserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
