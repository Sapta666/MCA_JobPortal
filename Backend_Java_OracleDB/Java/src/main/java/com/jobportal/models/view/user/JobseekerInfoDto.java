package com.jobportal.models.view.user;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.jobportal.models.db.JobseekerDetailsDto;
import com.jobportal.models.db.UserInfoDto;

import jakarta.persistence.Id;

public class JobseekerInfoDto {
	
	@JsonProperty("UserInfo") private UserInfoDto userInfo;
	@JsonProperty("JobseekerDetails") private JobseekerDetailsDto jobseekerDetails;

	public JobseekerInfoDto() {
		// TODO Auto-generated constructor stub
	}

	public UserInfoDto getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfoDto userInfo) {
		this.userInfo = userInfo;
	}

	public JobseekerDetailsDto getJobseekerDetails() {
		return jobseekerDetails;
	}

	public void setJobseekerDetails(JobseekerDetailsDto jobseekerDetails) {
		this.jobseekerDetails = jobseekerDetails;
	}		

}
