import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../global-components/shared.module';



@NgModule({
  declarations: [
    /* Main component goes here */
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
