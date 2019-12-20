//package com.cognizant.authenticationservice;
//
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.HashSet;
//import java.util.Set;
//
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import com.cognizant.authenticationservice.entity.Role;
//import com.cognizant.authenticationservice.entity.User;
//import com.cognizant.authenticationservice.repository.ConfirmationTokenRepository;
//import com.cognizant.authenticationservice.repository.RoleRepository;
//import com.cognizant.authenticationservice.repository.UserRepository;
//import com.cognizant.authenticationservice.security.AppUserDetailsService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//@ExtendWith(SpringExtension.class)
//@AutoConfigureMockMvc
//@SpringBootTest
//public class AuthenticationServiceApplicationMVCTest {
//	
//	@Autowired
//	AppUserDetailsService appUserDetailsService;
//	
//	@Autowired
//	private MockMvc mockMvc;
//	
//	@MockBean
//	UserRepository userRepository;
//	
//	@MockBean
//	RoleRepository roleRepository;
//	
//	@MockBean
//	ConfirmationTokenRepository confirmationTokenRepository;
//	
//	@Test
//	public void addUser() throws Exception {
//
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//
//		mockMvc.perform(MockMvcRequestBuilders.post("/stockmarket/user/signup")
//				.content(asJsonString(new User(17, "users88", "abcd",role ,"mailid@mail.com", "9978876678", true)))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//		
//	}
//	
//	@Test
//	public void addUserwithfalse() throws Exception {
//
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//
//		mockMvc.perform(MockMvcRequestBuilders.post("/stockmarket/user/signup")
//				.content(asJsonString(new User(17, "users88", "abcd",role ,"mailid@mail.com", "9978876678", false)))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//		
//	}
//	
//	@Test
//	public void updateUser() throws Exception {
//
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//
//		mockMvc.perform(MockMvcRequestBuilders.put("/stockmarket/user","Bearer user:pwd")
//				.content(asJsonString(new User(0, "users88", "abcd",role ,"mailid@mail.com", "9978876678", true)))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//		
//	}	
//	
//	
//	
//	public static String asJsonString(final Object obj) {
//		try {
//			return new ObjectMapper().writeValueAsString(obj);
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//	}
//	
//	
//
//}
