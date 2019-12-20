package com.cognizant.uploadexcelservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "stock_exchange")
public class StockExchange {

	@Id
	@Column(name = "ex_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@NotNull
	@Column(name = "ex_stock_exchange")
	private String stockExchange;

	@NotNull
	@Column(name = "ex_brief")
	private String brief;

	@NotNull
	@Column(name = "ex_address")
	private String address;

	@NotNull
	@Column(name = "ex_remarks")
	private String remarks;

	@Column(name = "ex_logo_url")
	private String logoUrl;
	
	public StockExchange() {
		super();
	}

	public StockExchange(int id, @NotNull String stockExchange, @NotNull String brief, @NotNull String address,
			@NotNull String remarks, String logoUrl) {
		super();
		this.id = id;
		this.stockExchange = stockExchange;
		this.brief = brief;
		this.address = address;
		this.remarks = remarks;
		this.logoUrl = logoUrl;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getLogoUrl() {
		return logoUrl;
	}

	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", stockExchange=" + stockExchange + ", brief=" + brief + ", address="
				+ address + ", remarks=" + remarks + ", logoUrl=" + logoUrl + "]";
	}
	
	
}
