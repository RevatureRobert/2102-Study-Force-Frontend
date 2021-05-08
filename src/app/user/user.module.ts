import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';




@NgModule({
  declarations: [
    BatchComponent,
    AdminBatchComponent,
    AdminBatchEditComponent,
    LoginComponent,
    PostLoginComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
