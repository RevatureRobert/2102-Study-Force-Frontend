import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';



@NgModule({
  declarations: [
    BatchComponent,
    AdminBatchComponent,
    AdminBatchEditComponent,
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
