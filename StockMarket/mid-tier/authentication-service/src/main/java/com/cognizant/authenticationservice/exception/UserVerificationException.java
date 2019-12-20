package com.cognizant.authenticationservice.exception;

public class UserVerificationException extends Exception {
	
	String message;

	public UserVerificationException(String message) {
		this.message = message;
	}

	@Override
	public String getMessage() {
		return message;
	}

}
