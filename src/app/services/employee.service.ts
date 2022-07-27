import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlApi = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,
  };
  employees!: Employee[];
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.urlApi);
  }

  getEmployee(id: string) {
    return this.http.get<Employee>(`${this.urlApi}/${id}`);
  }
}
