import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './components/batch/batch.component';

@NgModule({
  declarations: [
    BatchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BatchComponent,
  ]
})
export class UserModule { }
