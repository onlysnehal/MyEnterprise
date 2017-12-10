import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.findAll().subscribe(
      employees => {
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
    );
  }
}
