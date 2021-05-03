import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './global-components/button/button.component';
import { GlassPaneComponent } from './global-components/glass-pane/glass-pane.component';
import { GenericCardWideComponent } from './global-components/generic-card-wide/generic-card-wide.component';
import { GenericCardComponent } from './global-components/generic-card/generic-card.component';
import { SearchBarComponent } from './global-components/search-bar/search-bar.component';
>>>>>>> origin/sam-styling

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    ButtonComponent,
    GlassPaneComponent,
    GenericCardWideComponent,
    GenericCardComponent,
    SearchBarComponent
>>>>>>> origin/sam-styling
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    UserModule,
    HttpClientModule
=======
    NgbModule
>>>>>>> origin/sam-styling
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
