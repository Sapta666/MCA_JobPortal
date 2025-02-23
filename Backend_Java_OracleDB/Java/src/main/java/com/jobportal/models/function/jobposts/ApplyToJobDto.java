package com.jobportal.models.function.jobposts;

public class ApplyToJobDto {

	private String job_post_id;
	private String jobseeker_id;
	private String pre_application_data;

	public ApplyToJobDto() {
		// TODO Auto-generated constructor stub
	}

	public String getJob_post_id() {
		return job_post_id;
	}

	public void setJob_post_id(String job_post_id) {
		this.job_post_id = job_post_id;
	}

	public String getJobseeker_id() {
		return jobseeker_id;
	}

	public void setJobseeker_id(String jobseeker_id) {
		this.jobseeker_id = jobseeker_id;
	}

	public String getPre_application_data() {
		return pre_application_data;
	}

	public void setPre_application_data(String pre_application_data) {
		this.pre_application_data = pre_application_data;
	}
	
}
