package com.cinebook.repositories;

import com.cinebook.models.Employee;
import com.cinebook.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {
    public Optional<Employee> findByEmail(String email);
}
