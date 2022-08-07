import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { HttpClient } from '@angular/common/http';

/* eslint no-underscore-dangle: 0 */

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlApi = 'http://localhost:3001/api/employees';
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

  createEmployee(employee: Employee) {
    return this.http.post(this.urlApi, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.urlApi}/${employee._id}`, employee);
  }
}

// interface UrlApi { url: 'http://localhost:3000/api/employees' | 'http://localhost:3001/api/employees' }
