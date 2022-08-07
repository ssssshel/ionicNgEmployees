import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.page.html',
  styleUrls: ['./create-employee-form.page.scss'],
})
export class CreateEmployeeFormPage implements OnInit {

  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  createEmployee(form: NgForm) {
    this.employeeService.createEmployee(form.value).subscribe(res => this.createdUserRes(), err => alert(err));
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  private createdUserRes() {
    alert('User succesfully created');
    this.router.navigate(['/home']);
  }
}
