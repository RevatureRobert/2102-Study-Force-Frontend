import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/global-components/shared.module';
import { StacktraceRoutingModule } from './stacktrace-routing.module';
import { StacktraceService } from './services/stacktrace.service'
import { StacktraceHomeComponent } from 'src/app/stacktrace/components/stacktrace-home/stacktrace-home.component';
import { NewStacktraceComponent } from 'src/app/stacktrace/components/new-stacktrace/new-stacktrace.component';
import { StacktraceComponent } from 'src/app/stacktrace/components/stacktrace/stacktrace.component';
import { NewTechnologyComponent } from './components/new-technology/new-technology.component';
import { SolutionComponent } from './components/solution/solution.component';
import { TechnologyService } from 'src/app/stacktrace/services/technology.service';
import { SolutionVoteComponent } from './components/solution-vote/solution-vote.component';
import { SubscribeBellStacktraceComponent } from '../notification/component/subscribe-bell-stacktrace/subscribe-bell-stacktrace.component';
import { StackGuardGuard } from './services/stack-guard.guard';


@NgModule({
  declarations: [
    StacktraceComponent,
    NewStacktraceComponent,
    StacktraceHomeComponent,
    NewTechnologyComponent,
    SolutionComponent,
    SolutionVoteComponent,
    SubscribeBellStacktraceComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    StacktraceRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule

  ],
  exports:[
    StacktraceHomeComponent,
    StacktraceComponent
  ],
  providers:[
    StacktraceService,
    TechnologyService,
    StackGuardGuard
  ]
})
export class StacktraceModule { }
