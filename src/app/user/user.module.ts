import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { SharedModule } from '../global-components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';

@NgModule({
  declarations: [
    LoginComponent,
    PostLoginComponent,
    AddUsersEmailComponent,
    ],

  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
