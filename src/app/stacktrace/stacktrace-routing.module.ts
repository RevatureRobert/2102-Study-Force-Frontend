import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '', component: StacktraceHomeComponent
  }
  {
    path: '/new-stacktrace', component: NewStacktraceComponent
  }
  {
    path: '/{id}', component: StacktraceComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StacktraceRoutingModule {}
