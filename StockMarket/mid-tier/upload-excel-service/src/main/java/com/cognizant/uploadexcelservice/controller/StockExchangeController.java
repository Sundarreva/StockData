package com.cognizant.uploadexcelservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.uploadexcelservice.entity.StockExchange;
import com.cognizant.uploadexcelservice.service.StockExchangeServiceImpl;

@RestController
@RequestMapping("/stockmarket")
public class StockExchangeController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(StockExchangeController.class);
	
	@Autowired
	StockExchangeServiceImpl stockExchangeServiceImpl;
	
	@GetMapping("admin/stockexchange")	
	public List<StockExchange> getAllStockExchange() {
		LOGGER.info("Start");
		return stockExchangeServiceImpl.getAllStockExchange();
		
	}
	
	@PostMapping("admin/stockexchange")	
	public StockExchange addStockExchange(@RequestBody StockExchange stock) {
		LOGGER.info("Start");
		return stockExchangeServiceImpl.addStockExchange(stock);
		
	}

}
