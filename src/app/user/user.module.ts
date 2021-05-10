import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { FormsModule } from '@angular/forms';
import { AdminBatchCreateComponent } from './components/admin-batch-create/admin-batch-create.component';




@NgModule({
  declarations: [
    BatchComponent,
    AdminBatchComponent,
    AdminBatchEditComponent,
    LoginComponent,
    PostLoginComponent,
    AdminBatchCreateComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
