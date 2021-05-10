import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from "./global-components/base-page/base-page.component";
import { NavbarComponent } from "./global-components/navbar/navbar.component";
import { SearchBarComponent } from './global-components/search-bar/search-bar.component';
import { VoteComponent } from './global-components/vote/vote.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    BasePageComponent,
    NavbarComponent,
    SearchBarComponent,
    VoteComponent,
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
    BasePageComponent,
    NavbarComponent,
    SearchBarComponent,
    VoteComponent,
  ]
})
export class SharedModule { }
