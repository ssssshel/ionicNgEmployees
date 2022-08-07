import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeeFormPageRoutingModule } from './create-employee-form-routing.module';

import { CreateEmployeeFormPage } from './create-employee-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEmployeeFormPageRoutingModule
  ],
  declarations: [CreateEmployeeFormPage]
})
export class CreateEmployeeFormPageModule {}
