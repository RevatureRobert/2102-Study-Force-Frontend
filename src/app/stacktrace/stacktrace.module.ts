import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacktraceHomeComponent } from './components/stacktrace-home/stacktrace-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewStacktraceComponent } from './components/new-stacktrace/new-stacktrace.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StacktraceHomeComponent,
    NewStacktraceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    NgbModule
  ]
})
export class StacktraceModule { }
