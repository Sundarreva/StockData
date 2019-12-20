package com.cognizant.authenticationservice.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	AppUserDetailsService appUserDetailsService;

	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		LOGGER.info("SecurityConfigure->configure() Started");
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
		LOGGER.info("SecurityConfigure->configure() Ended");
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		LOGGER.info("SecurityConfigure->passwordEncoder() Started and Ended");
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		LOGGER.info("SecurityConfigure->configure(HttpSecurity) Started");
		httpSecurity.cors();
		httpSecurity.csrf().disable()
						   .httpBasic()
						   .and().authorizeRequests()
						   .antMatchers("/stockmarket/user/signup").anonymous()
						   .antMatchers("/stockmarket/user/{userName}").anonymous()
						   .antMatchers("/stockmarket/confirmation/{token}").anonymous()
						   .anyRequest()
						   .authenticated().and()
						   .addFilter(new JwtAuthorizationFilter(authenticationManager()));
	}
}
