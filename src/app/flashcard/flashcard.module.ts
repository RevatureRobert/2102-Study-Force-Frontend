import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from './flashcard.component';
import { FlashcardRoutingModule } from './flashcard-routing.module';



@NgModule({
  declarations: [FlashcardComponent],
  imports: [
    CommonModule,
    FlashcardRoutingModule
  ]
})
export class FlashcardModule { }
