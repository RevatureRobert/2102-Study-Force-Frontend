import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBellFlashcardComponent } from './component/subscribe-bell-flashcard/subscribe-bell-flashcard.component';
import { SubscribeBellStacktraceComponent } from './component/subscribe-bell-stacktrace/subscribe-bell-stacktrace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubscribeBellFlashcardComponent, SubscribeBellStacktraceComponent]
})
export class NotificationModule { }
