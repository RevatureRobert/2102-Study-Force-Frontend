import { AdminBatchEditComponent } from './components/admin-batch-edit/admin-batch-edit.component';
import { AdminBatchComponent } from './components/admin-batch/admin-batch.component';
import { BatchComponent } from './components/batch/batch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [

    {path: "batchDetails", component: BatchComponent},
    {path: "batchDetails/:id", component: BatchComponent},
    {path: "adminBatchDetails", component: AdminBatchComponent},
    {path: "adminBatchDetails/:id", component: AdminBatchComponent},
    {path: "adminBatchEditDetails", component: AdminBatchEditComponent},
    {path: "adminBatchEditDetails/:id", component: AdminBatchEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
