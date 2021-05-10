import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    PostLoginComponent,
    ],

  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],

  providers: [RedirectGuardService]
})
export class UserModule { }
