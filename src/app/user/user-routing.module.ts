import { BatchComponent } from './components/batch/batch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [

    {path: "batchDetails", component: BatchComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
