import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUserViewComponent } from './components/user-profile/user-profile-user-view/user-profile-user-view.component';
import { UserProfileAdminViewComponent } from './components/user-profile/user-profile-admin-view/user-profile-admin-view.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    UserProfileUserViewComponent,
    UserProfileAdminViewComponent
    ],

  imports: [
    CommonModule,
    UserRoutingModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
