import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
<<<<<<< HEAD
import { SharedModule } from '../global-components/shared.module';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';
>>>>>>> 0b7c483 (initial commit with bulkAddUsers branch)

@NgModule({
  declarations: [
    LoginComponent,
    PostLoginComponent,
    AddUsersEmailComponent,
    ],

  imports: [
    CommonModule,
<<<<<<< HEAD
    SharedModule,
    UserRoutingModule
=======
    UserRoutingModule,
    ReactiveFormsModule
>>>>>>> 0b7c483 (initial commit with bulkAddUsers branch)
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
