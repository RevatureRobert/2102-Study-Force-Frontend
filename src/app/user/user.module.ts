import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component'

@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent
    ],

  imports: [
    CommonModule,
    UserRoutingModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
