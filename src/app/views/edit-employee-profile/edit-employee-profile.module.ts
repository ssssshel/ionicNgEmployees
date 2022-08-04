import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployeeProfilePageRoutingModule } from './edit-employee-profile-routing.module';

import { EditEmployeeProfilePage } from './edit-employee-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployeeProfilePageRoutingModule
  ],
  declarations: [EditEmployeeProfilePage]
})
export class EditEmployeeProfilePageModule {}
