package com.jobportal.models.db;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "job_posts")
public class JobPostDto {
	
	@Id
	@ColumnDefault("") private String job_post_id;      
	@ColumnDefault("") private String employer_id;
	@ColumnDefault("") private String topic;            
	@ColumnDefault("") private String description;      
	@ColumnDefault("0") private int job_start_num_date;
	@ColumnDefault("0") private int job_end_num_date;
	@ColumnDefault("0") private int job_post_num_dat; 
	@ColumnDefault("0") private int job_post_dec_time;
	@ColumnDefault("") private String industry_id;
	@ColumnDefault("") private String job_type_id;
	@ColumnDefault("") private String industry_name;
	@ColumnDefault("") private String job_type;
	@ColumnDefault("") private String has_pre_application_data;
	@ColumnDefault("") private String pre_application_question;

	public JobPostDto() {
		// TODO Auto-generated constructor stub
	}

	public String getJob_post_id() {
		return job_post_id;
	}

	public void setJob_post_id(String job_post_id) {
		this.job_post_id = job_post_id;
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

	public int getJob_post_num_dat() {
		return job_post_num_dat;
	}

	public void setJob_post_num_dat(int job_post_num_dat) {
		this.job_post_num_dat = job_post_num_dat;
	}

	public int getJob_post_dec_time() {
		return job_post_dec_time;
	}

	public void setJob_post_dec_time(int job_post_dec_time) {
		this.job_post_dec_time = job_post_dec_time;
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

	public String getIndustry_name() {
		return industry_name;
	}

	public void setIndustry_name(String industry_name) {
		this.industry_name = industry_name;
	}

	public String getJob_type() {
		return job_type;
	}

	public void setJob_type(String job_type) {
		this.job_type = job_type;
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
