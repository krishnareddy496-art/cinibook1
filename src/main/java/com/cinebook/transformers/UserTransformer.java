package com.cinebook.transformers;

import com.cinebook.constants.SystemConstant;
import com.cinebook.enums.CompanyType;
import com.cinebook.enums.UserType;
import com.cinebook.models.Company;
import com.cinebook.models.Employee;
import com.cinebook.models.User;
import com.cinebook.utilities.SystemUtility;

import java.time.LocalDateTime;

public class UserTransformer {

    public static Employee transformCompanyToAdminUser(Company company){
        return Employee.builder()
                .email(company.getEmail())
                .userType(company.getCompanyType() == CompanyType.INTERNAL ? UserType.INTERNAL : UserType.EMPLOYEE)
                .designation("admin")
                .company(company)
                .employeeCode(SystemUtility.generate("EMP"))
                .email(company.getEmail())
                .fullName(company.getCompanyName() + " " + SystemConstant.DEFAULT_ADMIN_NAME)
                .mobileNumber(company.getPhoneNumber())
                .passwordHash(SystemUtility.generateRandomPassword(SystemConstant.DEFAULT_PASSWORD_LENGTH))
                .lastLoginAt(null)
                .createdBy("system")
                .updatedBy("system")
                .build();
    }

}
