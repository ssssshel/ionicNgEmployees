import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeeProfilePage } from './edit-employee-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmployeeProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmployeeProfilePageRoutingModule {}
