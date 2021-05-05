import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './global-components/button/button.component';
import { GlassPaneComponent } from './global-components/glass-pane/glass-pane.component';
import { GenericCardWideComponent } from './global-components/generic-card-wide/generic-card-wide.component';
import { GenericCardComponent } from './global-components/generic-card/generic-card.component';
import { SearchBarComponent } from './global-components/search-bar/search-bar.component';
import { UserModule } from './user/user.module';
import { DropdownComponent } from './global-components/dropdown/dropdown.component';
import { PaginationComponent } from './global-components/pagination/pagination.component';
import { DiologueCardComponent } from './global-components/diologue-card/diologue-card.component';
import { HomeComponent } from './home-component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    GlassPaneComponent,
    GenericCardWideComponent,
    GenericCardComponent,
    SearchBarComponent,
    HomeComponent,
    SearchBarComponent,
    DropdownComponent,
    PaginationComponent,
    DiologueCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
