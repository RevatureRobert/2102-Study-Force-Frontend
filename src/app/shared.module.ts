import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { BasePageComponent } from "./global-components/base-page/base-page.component";
import { NavbarComponent } from "./global-components/navbar/navbar.component";
import { SearchBarComponent } from './global-components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    BasePageComponent,
    NavbarComponent,
    SearchBarComponent  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasePageComponent,
    NavbarComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
