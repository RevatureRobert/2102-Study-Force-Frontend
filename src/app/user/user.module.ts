import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BatchComponent } from './components/batch/batch.component';



@NgModule({
  declarations: [
    BatchComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    BatchComponent,
  ]
})
export class UserModule { }
