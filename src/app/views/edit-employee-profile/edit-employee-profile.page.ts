import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

/* eslint no-underscore-dangle: 0 */

@Component({
  selector: 'app-edit-employee-profile',
  templateUrl: './edit-employee-profile.page.html',
  styleUrls: ['./edit-employee-profile.page.scss'],
})
export class EditEmployeeProfilePage implements OnInit {

  profileId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    public employeeService: EmployeeService
  ) { }

  ngOnInit() {
    // this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.getEmployeeById(this.profileId);
  }

  editEmployee(form: NgForm) {
    if (form.value._id) {
      const confirmation = confirm('Are you sure you want to edit employee info?');
      if (confirmation) {
        this.employeeService.updateEmployee(form.value).subscribe(res => alert('User succesfully updated'), err => alert(err));
      }
    }
  }

  resetForm(form: NgForm) {
    form.reset(this.employeeService.selectedEmployee);
  }
}
