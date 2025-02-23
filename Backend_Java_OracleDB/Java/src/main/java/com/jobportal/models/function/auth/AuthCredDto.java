package com.jobportal.models.function.auth;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthCredDto {
	
	@JsonProperty(value = "Username") String username = "";
	@JsonProperty(value = "Password") private String password = "";
	
	public AuthCredDto() {
		
	}
	
	public AuthCredDto(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
}
