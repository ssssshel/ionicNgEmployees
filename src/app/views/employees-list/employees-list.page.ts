import { Component, OnChanges, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListPage implements OnInit {

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe(res => this.employeeService.employees = res, err => console.log(err));
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.getEmployees();
    }, 700);
  }
}
