import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeFormPage } from './create-employee-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEmployeeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEmployeeFormPageRoutingModule {}
