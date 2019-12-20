package com.cognizant.authenticationservice.service;

import com.cognizant.authenticationservice.entity.User;
import com.cognizant.authenticationservice.exception.UserAlreadyExistException;

public interface UserService {
	
	public User getByUsername(String name);
	
	public User signup(User user) throws UserAlreadyExistException;
	
	public User updateUser(User user) ;

}
