package com.cognizant.uploadexcelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.uploadexcelservice.entity.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	public User findByUsername(String username); 

	
}
