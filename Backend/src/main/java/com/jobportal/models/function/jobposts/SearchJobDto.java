package com.jobportal.models.function.jobposts;

public class SearchJobDto {
	
	private String topic = "";
	private String description = "";
	private String job_type_id = "";
	private String industry_id = "";
	private int job_start_num_date = 0;
	private int job_end_num_date = 0;
	private String employer_id = "";

	public SearchJobDto() {
		// TODO Auto-generated constructor stub
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getJob_type_id() {
		return job_type_id;
	}

	public void setJob_type_id(String job_type_id) {
		this.job_type_id = job_type_id;
	}

	public String getIndustry_id() {
		return industry_id;
	}

	public void setIndustry_id(String industry_id) {
		this.industry_id = industry_id;
	}

	public int getJob_start_num_date() {
		return job_start_num_date;
	}

	public void setJob_start_num_date(int job_start_num_date) {
		this.job_start_num_date = job_start_num_date;
	}

	public int getJob_end_num_date() {
		return job_end_num_date;
	}

	public void setJob_end_num_date(int job_end_num_date) {
		this.job_end_num_date = job_end_num_date;
	}

	public String getEmployer_id() {
		return employer_id;
	}

	public void setEmployer_id(String employer_id) {
		this.employer_id = employer_id;
	}
}
