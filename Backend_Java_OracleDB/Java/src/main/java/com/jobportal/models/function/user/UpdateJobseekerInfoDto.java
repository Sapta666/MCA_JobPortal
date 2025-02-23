package com.jobportal.models.function.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.jobportal.models.db.JobseekerDetailsDto;
import com.jobportal.models.db.UserInfoDto;

public class UpdateJobseekerInfoDto {
	
	@JsonProperty("UserInfo") private UserInfoDto userInfo;
	@JsonProperty("JobseekerDetails") private JobseekerDetailsDto jobseekerDetails;

	public UpdateJobseekerInfoDto() {
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
