package com.jobportal.models.function;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BasicResponseDto {
	
	@JsonProperty(value = "Status") String status = "";
	@JsonProperty(value = "Message") private String message = "";
		
	public BasicResponseDto() {
		
	}

	public BasicResponseDto(String status, String message) {
		super();
		this.status = status;
		this.message = message;
	}

	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}	

}
