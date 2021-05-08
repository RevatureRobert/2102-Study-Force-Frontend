import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { BatchComponent } from './components/batch/batch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RedirectGuardService } from './services/redirect-guard.service';
import { BASE_URL_LOGIN_REGISTRATION } from '../../environments/environment';
import { PostLoginComponent } from './components/login/post-login/post-login.component';

const userRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {
        path: "loginRoute",
        canActivate: [RedirectGuardService], component: RedirectGuardService,
        data: {
            externalUrl: BASE_URL_LOGIN_REGISTRATION
        }
    },
    {path: "oauth2", component: PostLoginComponent},
    {path: "batchDetails", component: BatchComponent},
    {path: "batchDetails/:id", component: BatchComponent},
    {path: "adminBatchDetails", component: AdminBatchComponent},
    {path: "adminBatchDetails/:id", component: AdminBatchComponent},
    {path: "adminBatchEditDetails", component: AdminBatchEditComponent},
    {path: "adminBatchEditDetails/:id", component: AdminBatchEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
