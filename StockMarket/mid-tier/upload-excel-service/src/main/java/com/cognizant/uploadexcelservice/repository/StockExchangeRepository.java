package com.cognizant.uploadexcelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.uploadexcelservice.entity.StockExchange;

public interface StockExchangeRepository extends JpaRepository<StockExchange, Integer> {

}
