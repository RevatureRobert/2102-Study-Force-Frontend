import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RedirectGuardService } from './services/redirect-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component'
import { BASE_URL_LOGIN_REGISTRATION } from '../../environments/environment';
import { PostLoginComponent } from './components/login/post-login/post-login.component';
import { AddUsersEmailComponent } from './components/add-users-email/add-users-email.component';
import { UserProfileEditComponent } from './components/user-profile/user-profile-edit/user-profile-edit.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { BatchComponent } from './components/batch/batch.component';
import { AddUsersNewBatchComponent } from './components/add-users-new-batch/add-users-new-batch.component';


const userRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {
        path: "loginRoute",
        canActivate: [RedirectGuardService], component: RedirectGuardService,
        data: {
            externalUrl: BASE_URL_LOGIN_REGISTRATION
        }
    },
    {path: "profile/:id", component: UserProfileComponent},
    {path: "oauth2", component: PostLoginComponent},
    {path: "addUsers", component: AddUsersEmailComponent},
    {path: "addUsersNewBatch", component: AddUsersNewBatchComponent},
    {path: "profile/edit", component: UserProfileEditComponent},
    {path: "batchDetails", component: BatchComponent},
    {path: "batchDetails/:id", component: BatchComponent},
    {path: "adminBatchDetails", component: AdminBatchComponent},
    {path: "adminBatchDetails/:id", component: AdminBatchComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
