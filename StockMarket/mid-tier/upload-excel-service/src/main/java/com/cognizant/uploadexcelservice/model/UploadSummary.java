package com.cognizant.uploadexcelservice.model;

import java.util.Date;

public class UploadSummary {
	
private int noOfRecords;
	
	private String companyName;
	
	private Date minDate;
	
	private Date maxDate;

	public UploadSummary() {
	}

	public int getNoOfRecords() {
		return noOfRecords;
	}

	public void setNoOfRecords(int noOfRecords) {
		this.noOfRecords = noOfRecords;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Date getMinDate() {
		return minDate;
	}

	public void setMinDate(Date minDate) {
		this.minDate = minDate;
	}

	public Date getMaxDate() {
		return maxDate;
	}

	public void setMaxDate(Date maxDate) {
		this.maxDate = maxDate;
	}

	@Override
	public String toString() {
		return "UploadSummary [noOfRecords=" + noOfRecords + ", companyName=" + companyName + ", minDate=" + minDate
				+ ", maxDate=" + maxDate + "]";
	}

}
