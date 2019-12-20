package com.cognizant.uploadexcelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.uploadexcelservice.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer>{
	@Query(value = "select * from company where cp_code=?1 ", nativeQuery = true)
	public Company findByCompanyCode(Long companyCode);
}
