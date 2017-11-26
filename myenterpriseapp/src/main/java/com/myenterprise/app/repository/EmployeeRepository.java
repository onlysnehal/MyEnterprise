package com.myenterprise.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.myenterprise.app.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

}
