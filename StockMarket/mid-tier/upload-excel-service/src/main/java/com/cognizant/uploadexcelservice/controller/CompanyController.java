package com.cognizant.uploadexcelservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.uploadexcelservice.entity.Company;
import com.cognizant.uploadexcelservice.service.CompanyServiceImpl;

@RestController
@RequestMapping("/stockmarket")
public class CompanyController {
	
private static final Logger LOGGER = LoggerFactory.getLogger(CompanyController.class);
	
	@Autowired
	CompanyServiceImpl companyServiceImpl;
	
	@GetMapping("/company")
	public List<Company> getAllCompanys() {
		return companyServiceImpl.getAllCompany();
	}

}
