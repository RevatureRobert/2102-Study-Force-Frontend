import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RedirectGuardService } from './services/redirect-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';
import { UserProfileEditComponent } from './components/user-profile/user-profile-edit/user-profile-edit.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { BatchComponent } from './components/batch/batch.component';
import { AdminBatchCreateComponent } from './components/admin-batch-create/admin-batch-create.component';
import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { BASE_URL_LOGIN_REGISTRATION } from '../../environments/environment';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'loginRoute',
    canActivate: [RedirectGuardService],
    component: RedirectGuardService,
    data: {
      externalUrl: BASE_URL_LOGIN_REGISTRATION
    }
  },
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'oauth2', component: PostLoginComponent },
  { path: 'addUsers', component: AddUsersEmailComponent },
  { path: 'edit/profile', component: UserProfileEditComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'batchDetails/:id', component: BatchComponent },
  { path: 'batchDetails', component: BatchComponent },
  { path: 'adminBatchDetails', component: AdminBatchComponent },
  { path: 'adminBatchDetails/:id', component: AdminBatchComponent },
  { path: 'adminBatchEditDetails', component: AdminBatchEditComponent },
  { path: 'adminBatchEditDetails/:id', component: AdminBatchEditComponent },
  { path: 'adminBatchCreate', component: AdminBatchCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
