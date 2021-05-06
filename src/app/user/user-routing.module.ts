import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RedirectGuardService } from './services/redirect-guard.service';
import { BASE_URL_LOGIN_REGISTRATION } from '../../environments/environment'
import { UserProfileComponent } from './components/user-profile/user-profile.component'

const userRoutes: Routes = [
    {path: "login", component: LoginComponent},
    {
        path: "loginRoute",
        canActivate: [RedirectGuardService], component: RedirectGuardService,
        data: {
            externalUrl: BASE_URL_LOGIN_REGISTRATION
        }
    },
    {path: "profile", component: UserProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
