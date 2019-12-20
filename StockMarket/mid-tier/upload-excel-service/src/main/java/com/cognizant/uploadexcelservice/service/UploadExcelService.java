package com.cognizant.uploadexcelservice.service;

import java.io.FileNotFoundException;

import com.cognizant.uploadexcelservice.model.UploadSummary;

public interface UploadExcelService {
	
	public UploadSummary getSummary();
	 public void storeFile(String file) throws FileNotFoundException;

}
