import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployeeProfilePage implements OnInit {
  profileId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEmployeeById(this.profileId);
  }

  getEmployeeById(id: string) {
    return this.employeeService.getEmployee(id).subscribe(res => this.employeeService.selectedEmployee = res, err => console.log(err));
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      return this.employeeService.deleteEmployee(id).subscribe(res => this.delResponse(), err => alert(err));
    }
  }

  private delResponse() {
    alert('Employee has been succesfully deleted');
    this.router.navigate(['/employees-list']);
  }
}
