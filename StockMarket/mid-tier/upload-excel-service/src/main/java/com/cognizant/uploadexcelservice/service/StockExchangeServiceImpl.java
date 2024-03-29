package com.cognizant.uploadexcelservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.uploadexcelservice.entity.StockExchange;
import com.cognizant.uploadexcelservice.repository.StockExchangeRepository;

@Service
public class StockExchangeServiceImpl implements StockExchangeService {
	
	@Autowired
	StockExchangeRepository stockExchangeRepository;
	
	@Transactional
	public List<StockExchange> getAllStockExchange() {
		return stockExchangeRepository.findAll();
	}
	
	@Transactional
	public StockExchange addStockExchange(StockExchange stock) {
		if(stock.getLogoUrl().length() <= 15 ) {
			stock.setLogoUrl("https://st3.depositphotos.com/15648834/17930/v/1600/"
					+ "depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg");
		}
		return stockExchangeRepository.save(stock);
	}

}
