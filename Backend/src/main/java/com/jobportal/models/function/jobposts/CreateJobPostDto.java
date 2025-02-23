package com.jobportal.models.function.jobposts;

import org.hibernate.annotations.ColumnDefault;

public class CreateJobPostDto {
	
	@ColumnDefault("") private String employer_id;
	@ColumnDefault("") private String topic;            
	@ColumnDefault("") private String description;
	@ColumnDefault("0") private int job_start_num_date;
	@ColumnDefault("0") private int job_end_num_date;
	@ColumnDefault("") private String industry_id;
	@ColumnDefault("") private String job_type_id;
	@ColumnDefault("N") private String has_pre_application_data;
	@ColumnDefault("") private String pre_application_question;	

	public CreateJobPostDto() {
		// TODO Auto-generated constructor stub
	}

	public String getEmployer_id() {
		return employer_id;
	}

	public void setEmployer_id(String employer_id) {
		this.employer_id = employer_id;
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

	public String getIndustry_id() {
		return industry_id;
	}

	public void setIndustry_id(String industry_id) {
		this.industry_id = industry_id;
	}

	public String getJob_type_id() {
		return job_type_id;
	}

	public void setJob_type_id(String job_type_id) {
		this.job_type_id = job_type_id;
	}

	public String getHas_pre_application_data() {
		return has_pre_application_data;
	}

	public void setHas_pre_application_data(String has_pre_application_data) {
		this.has_pre_application_data = has_pre_application_data;
	}

	public String getPre_application_question() {
		return pre_application_question;
	}

	public void setPre_application_question(String pre_application_question) {
		this.pre_application_question = pre_application_question;
	}
		
}
