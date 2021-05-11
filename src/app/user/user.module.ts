import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { AdminBatchCreateComponent } from './components/admin-batch-create/admin-batch-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectGuardService } from './services/redirect-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUserViewComponent } from './components/user-profile/user-profile-user-view/user-profile-user-view.component';
import { UserProfileAdminViewComponent } from './components/user-profile/user-profile-admin-view/user-profile-admin-view.component'
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { SharedModule } from '../global-components/shared.module';
import { UserProfileEditComponent } from './components/user-profile/user-profile-edit/user-profile-edit.component';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { NavbarComponent } from '../global-components/navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    UserProfileUserViewComponent,
    UserProfileAdminViewComponent,
    PostLoginComponent,
    AddUsersEmailComponent,
    UserSearchComponent,
    UserProfileEditComponent,
    BatchComponent,
    AdminBatchComponent,
    AdminBatchCreateComponent,
    AdminBatchEditComponent
    ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],

  providers: [RedirectGuardService]
})

export class UserModule { }
