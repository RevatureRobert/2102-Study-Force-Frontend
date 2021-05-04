import { GenericCardComponent } from './../global-components/generic-card/generic-card.component';
import { GlassPaneComponent } from './../global-components/glass-pane/glass-pane.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './components/batch/batch.component';
import { GenericCardWideComponent } from '../global-components/generic-card-wide/generic-card-wide.component';


@NgModule({
  declarations: [
    BatchComponent,
    GlassPaneComponent,
    GenericCardWideComponent,
    GenericCardComponent,

  ],
  imports: [
    CommonModule,

  ],
  exports: [
    BatchComponent,
    GlassPaneComponent,
    GenericCardComponent,
    GenericCardWideComponent
  ]
})
export class UserModule { }
