package com.myenterprise.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myenterprise.app.model.Employee;
import com.myenterprise.app.repository.EmployeeRepository;
import com.myenterprise.app.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void addEmployee(Employee emp) {
		employeeRepository.insert(emp);

	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();

	}

}
