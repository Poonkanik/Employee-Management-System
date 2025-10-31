package com.example.employee.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;
    private String email;
    private int experience;
    private double salary;
    private boolean backgroundCheck;
    private boolean degreeVerification;

    // 🔹 Default Constructor (required by JPA)
    public Employee() {
    }

    // 🔹 All-Args Constructor (optional, useful for testing or initialization)
    public Employee(Long id, String name, String role, String email, int experience, double salary,
            boolean backgroundCheck, boolean degreeVerification) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.experience = experience;
        this.salary = salary;
        this.backgroundCheck = backgroundCheck;
        this.degreeVerification = degreeVerification;
    }

    // 🔹 Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public boolean isBackgroundCheck() {
        return backgroundCheck;
    }

    public void setBackgroundCheck(boolean backgroundCheck) {
        this.backgroundCheck = backgroundCheck;
    }

    public boolean isDegreeVerification() {
        return degreeVerification;
    }

    public void setDegreeVerification(boolean degreeVerification) {
        this.degreeVerification = degreeVerification;
    }
}
