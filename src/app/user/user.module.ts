import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

@NgModule({
  declarations: [
    LoginComponent,
    PostLoginComponent,
    AddUsersEmailComponent,
    UserSearchComponent,
    ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
