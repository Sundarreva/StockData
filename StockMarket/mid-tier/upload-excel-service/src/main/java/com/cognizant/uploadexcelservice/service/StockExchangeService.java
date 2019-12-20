package com.cognizant.uploadexcelservice.service;

import java.util.List;

import com.cognizant.uploadexcelservice.entity.StockExchange;

public interface StockExchangeService {
	
	public List<StockExchange> getAllStockExchange();
	
	public StockExchange addStockExchange(StockExchange stock);

}
