package com.cognizant.uploadexcelservice;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cognizant.uploadexcelservice.entity.Company;
import com.cognizant.uploadexcelservice.entity.StockExchange;
import com.cognizant.uploadexcelservice.repository.CompanyRepository;
import com.cognizant.uploadexcelservice.repository.StockExchangeRepository;
import com.cognizant.uploadexcelservice.repository.StockPriceRepository;
import com.cognizant.uploadexcelservice.service.CompanyServiceImpl;
import com.cognizant.uploadexcelservice.service.StockExchangeServiceImpl;
import com.cognizant.uploadexcelservice.service.UploadExcelServiceImpl;

@SpringBootTest
class UploadExcelServiceApplicationTests {
	
//	@MockBean
//	private StockPriceRepository stockPriceRepository;
//	
//	@MockBean
//	private CompanyRepository companyRepository;
//	
//	@MockBean
//	StockExchangeRepository stockExchangeRepository;
//	
//	@Autowired
//	private StockExchangeServiceImpl stockExchangeServiceImpl;
//	
//	@Autowired
//	private CompanyServiceImpl companyServiceImpl;
//	
//	@Autowired
//	private UploadExcelServiceImpl uploadExcelServiceImpl;
//
//
//	@Test
//	public void teststock() {
//		List<StockExchange> stock = getStock();
//		Mockito.when(stockExchangeRepository.findAll()).thenReturn(stock);
//		assertEquals(stock,stockExchangeServiceImpl.getAllStockExchange());
//	}
//	
//	@Test
//	public void testAddStock() {
//		List<StockExchange> stock = getStock();
//		String url = "https://st3.depositphotos.com/15648834/17930/v/1600/"
//				+ "depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";
//		assertNotEquals(stock,stockExchangeServiceImpl.addStockExchange(stock.get(1)));	
//	}
//	
//	@Test
//	public void testAddStockcase2() {
//		StockExchange stock = getStock().get(1);
//		stock.setLogoUrl("1234567890111213141516");
//		assertNotEquals(stock,stockExchangeServiceImpl.addStockExchange(stock));	
//	}
//	
//	@Test
//	public void testgetcompany() {
//		List<Company> comp = getCompany();
//		assertNotEquals(comp,companyServiceImpl.getAllCompany());	
//	}
//	
//	public List<StockExchange> getStock() {
//		List<StockExchange> stock = new ArrayList<StockExchange>();
//		for(int i=0;i<2;i++) {
//			StockExchange newStock = new StockExchange();
//			newStock.setStockExchange("abc");
//			newStock.setAddress("abc");
//			newStock.setBrief("abc");
//			newStock.setLogoUrl("abc");
//			newStock.setRemarks("abc");
//			stock.add(newStock);
//		}
//		
//		return stock;
//		
//	}
//	
//	public List<Company> getCompany() {
//		List<Company> company = new ArrayList<Company>();
//		for(int i=0;i<2;i++) {
//			Company comp = new Company();
//			comp.setName("abc");
//			comp.setBrief("abc");
//			comp.setLogoUrl("abc");
//			company.add(comp);
//		}
//		
//		return company;
//		
//	}

}
