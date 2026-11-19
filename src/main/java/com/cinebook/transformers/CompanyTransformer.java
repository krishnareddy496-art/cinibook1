package com.cinebook.transformers;

import com.cinebook.dtos.request.RegisterCompanyDto;
import com.cinebook.enums.CompanyType;
import com.cinebook.models.Company;
import com.cinebook.utilities.SystemUtility;

public class CompanyTransformer {


    /**
     * Adapter Design pattern
     * @param dto
     * @param companyType
     * @return
     */
    public static Company mapRegisterCompanyDtoToCompany(
            RegisterCompanyDto dto,
            CompanyType companyType
    ){

        return Company.builder()
                .companyCode(SystemUtility.generate("COMP"))
                .companyName(dto.getCompanyName())
                .companyType(companyType)
                .legalName(dto.getLegalName())
                .registrationNumber(dto.getRegistrationNumber())
                .gstNumber(dto.getGstNumber())
                .panNumber(dto.getPanNumber())
                .email(dto.getEmail())
                .phoneNumber(dto.getPhoneNumber())
                .website(dto.getWebsite())

                // Address
                .addressLine1(dto.getAddressLine1())
                .addressLine2(dto.getAddressLine2())
                .city(dto.getCity())
                .state(dto.getState())
                .country(dto.getCountry())
                .postalCode(dto.getPostalCode())

                // Branding
                .logoUrl(null)

                //audit
                .createdBy("system")
                .updatedBy("system")

                .build();
    }

}
