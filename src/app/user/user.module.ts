import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';



@NgModule({
  declarations: [
    BatchComponent,
    AdminBatchComponent,
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
