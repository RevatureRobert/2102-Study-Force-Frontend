import { NgModule } from '@angular/core';
import { SharedModule } from '../global-components/shared.module';
import { FlashcardRoutingModule } from './flashcard-routing.module';


@NgModule({
  declarations: [/**main */],
  imports: [
    SharedModule,
    FlashcardRoutingModule
  ]
})
export class FlashcardModule { }
