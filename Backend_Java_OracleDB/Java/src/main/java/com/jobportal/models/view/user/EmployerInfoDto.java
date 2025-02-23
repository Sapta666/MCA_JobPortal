package com.jobportal.models.view.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.jobportal.models.db.EmployerDetailsDto;
import com.jobportal.models.db.UserInfoDto;

public class EmployerInfoDto {
	
	@JsonProperty("UserInfo") private UserInfoDto userInfo;
	@JsonProperty("EmployerDetails") private EmployerDetailsDto employerDetails;

	public EmployerInfoDto() {
		// TODO Auto-generated constructor stub
	}

	public UserInfoDto getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfoDto userInfo) {
		this.userInfo = userInfo;
	}

	public EmployerDetailsDto getEmployerDetails() {
		return employerDetails;
	}

	public void setEmployerDetails(EmployerDetailsDto employerDetails) {
		this.employerDetails = employerDetails;
	}		

}
