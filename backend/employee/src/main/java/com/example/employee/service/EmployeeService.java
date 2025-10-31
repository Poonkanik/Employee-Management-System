package com.example.employee.service;

import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    // Get all employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Add a new employee
    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Get employee by ID
    public Optional<Employee> getEmployeeById(Long id) {
        return repository.findById(id);
    }

    // Delete employee by ID
    public boolean deleteEmployee(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    // Update existing employee (optional)
    public Employee updateEmployee(Long id, Employee newEmployee) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setName(newEmployee.getName());
                    existing.setRole(newEmployee.getRole());
                    existing.setEmail(newEmployee.getEmail());
                    existing.setExperience(newEmployee.getExperience());
                    existing.setSalary(newEmployee.getSalary());
                    existing.setBackgroundCheck(newEmployee.isBackgroundCheck());
                    existing.setDegreeVerification(newEmployee.isDegreeVerification());
                    return repository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }
}
