package com.cognizant.uploadexcelservice.service;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

import javax.transaction.Transactional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.uploadexcelservice.entity.StockPrice;
import com.cognizant.uploadexcelservice.model.UploadSummary;
import com.cognizant.uploadexcelservice.repository.CompanyRepository;
import com.cognizant.uploadexcelservice.repository.StockPriceRepository;

@Service
public class UploadExcelServiceImpl implements UploadExcelService {

	
	@Autowired
	private StockPriceRepository stockPriceRepository;
	
	@Autowired
	private CompanyRepository companyRepository;

	
	UploadSummary uploadSummary = new UploadSummary();

	@Override
	@Transactional
	public void storeFile(String filePath) throws FileNotFoundException {
		
		Long companyCodeDetails = 0L;

		Date minDate = null;
		Date maxDate = null;

		FileInputStream inputStream = new FileInputStream(filePath);

		int count = 0;
		Workbook workbook;

		try {
			workbook = new XSSFWorkbook(inputStream);
			Sheet firstSheet = workbook.getSheetAt(0);
			Iterator<Row> rowIterator = firstSheet.iterator();
			rowIterator.next();
			while (rowIterator.hasNext()) {
				StockPrice stockPrice = new StockPrice();
				Row nextRow = rowIterator.next();
				count = count + 1;
				Iterator<Cell> cellIterator = nextRow.cellIterator();
				while (cellIterator.hasNext()) {
					Cell nextCell = cellIterator.next();
					int columnIndex = nextCell.getColumnIndex();
					switch (columnIndex) {
					
					case 0:
						long companyCode = (long) nextCell.getNumericCellValue();
						stockPrice.setCompanyCode(companyCode);
						companyCodeDetails = companyCode;
						break;
					
					case 1:
						String stockExchange = nextCell.getStringCellValue();
						stockPrice.setStockExchange(stockExchange);
						break;
					
					case 2:
						double sharePrice = (double) nextCell.getNumericCellValue();
						stockPrice.setCurrentPrice(sharePrice);
						break;
						
					case 3:
						Date date = nextCell.getDateCellValue();
						
						if (minDate == null) {
							minDate = date;
						}
						
						if (maxDate == null) {
							maxDate = date;
						}
						
						if (date.compareTo(minDate) < 0) {
							minDate = date;
						}
						
						if (date.compareTo(maxDate) > 0) {
							maxDate = date;
						}
						
						stockPrice.setDate(date);
						break;
						
					case 4:
						Date time = nextCell.getDateCellValue();
						SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
						stockPrice.setTime(Time.valueOf(sdf.format(time)));
						break;
					
					default:
						break;
					}
				}
				
				if (stockPrice.getCompanyCode() != null) {
					StockPrice newStockPrice = stockPriceRepository.getStock(stockPrice.getDate(),
							stockPrice.getTime(), stockPrice.getCompanyCode(), stockPrice.getStockExchange());
					if (newStockPrice == null) {
						count = count + 1;
						stockPriceRepository.save(stockPrice);
					}
				}
			}
			workbook.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if (count == 0) {
			uploadSummary.setNoOfRecords(count);
		} else {
			uploadSummary.setNoOfRecords(count);
		}

		uploadSummary.setNoOfRecords(count - 1);
		System.out.println(companyCodeDetails);
		uploadSummary.setCompanyName(companyRepository.findByCompanyCode(companyCodeDetails).getName());
		uploadSummary.setMaxDate(maxDate);
		uploadSummary.setMinDate(minDate); 
		 
	}

	@Override
	@Transactional
	public UploadSummary getSummary() {
		return uploadSummary;
	}
}