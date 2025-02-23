package com.jobportal.models.function.user;

import com.jobportal.models.db.EmployerDetailsDto;
import com.jobportal.models.db.JobseekerDetailsDto;
import com.jobportal.models.db.UserInfoDto;

public class RegisterUserDto {
	
	private UserInfoDto userInfo;
	private JobseekerDetailsDto jobseekerDetails;
	private EmployerDetailsDto employerDetails;

	public RegisterUserDto() {
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

	public EmployerDetailsDto getEmployerDetails() {
		return employerDetails;
	}

	public void setEmployerDetails(EmployerDetailsDto employerDetails) {
		this.employerDetails = employerDetails;
	}		

}
