package com.cognizant.authenticationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.authenticationservice.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{
	
	public Role findByName(String name);
}
