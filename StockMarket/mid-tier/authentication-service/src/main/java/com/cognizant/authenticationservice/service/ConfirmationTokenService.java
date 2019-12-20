package com.cognizant.authenticationservice.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.authenticationservice.entity.ConfirmationToken;
import com.cognizant.authenticationservice.entity.User;
import com.cognizant.authenticationservice.repository.ConfirmationTokenRepository;
import com.cognizant.authenticationservice.repository.UserRepository;

@Service
public class ConfirmationTokenService {
	
	@Autowired
	ConfirmationTokenRepository confirmationTokenRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Transactional
	public User confirmMailAddress(String token) {
		ConfirmationToken userConfirmation=confirmationTokenRepository.findByConfirmationToken(token);
		if(confirmationTokenRepository.findByConfirmationToken(token)!=null) {
			confirmationTokenRepository.delete(userConfirmation);
			User user = userRepository.findByUsername(userConfirmation.getUser().getUsername());
			user.setConfirmed(true);
			userRepository.save(user);
		}
		return null;
	}
}

