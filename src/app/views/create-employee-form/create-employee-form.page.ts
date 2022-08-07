import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.page.html',
  styleUrls: ['./create-employee-form.page.scss'],
})
export class CreateEmployeeFormPage implements OnInit {

  constructor(
    public employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
  }

  createEmployee(form: NgForm) {
    this.employeeService.createEmployee(form.value).subscribe(res => alert('User succesfully created'), err => alert(err));
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
