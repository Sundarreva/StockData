package com.cognizant.authenticationservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authenticationservice.entity.User;
import com.cognizant.authenticationservice.exception.UserAlreadyExistException;
import com.cognizant.authenticationservice.service.UserServiceImpl;


@RestController
@RequestMapping("/stockmarket")
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserDetailsService userDetailsManager;
	
	@Autowired
	UserServiceImpl userService;

	@PostMapping("/user/signup")
	public User signup(@RequestBody User user) throws UserAlreadyExistException {

		LOGGER.info("UserController-> signup(user) Started");
		LOGGER.debug("user{}",user.getUsername());
		LOGGER.debug("user{}",user.getPassword());
		
		return userService.signup(user);
	}
	
	@GetMapping("/user/{userName}")
	public User getUserByUsername(@PathVariable String userName) throws UserAlreadyExistException {
		LOGGER.info("Start");
		return userService.getByUsername(userName);
	}
	
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) throws UserAlreadyExistException {
		LOGGER.info("Start");
		return userService.updateUser(user);
	}
	
	

}
