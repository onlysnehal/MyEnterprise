package com.myenterprise.app.service;

import java.util.List;

import com.myenterprise.app.model.Employee;

public interface EmployeeService {
	
	public void addEmployee(Employee emp);
	public List<Employee>getAllEmployees();

}
