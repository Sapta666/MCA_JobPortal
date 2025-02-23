package com.jobportal.models.db;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employer_details")
public class EmployerDetailsDto {
	
	@Id
	@ColumnDefault("")private String employer_id;
	@ColumnDefault("")private String user_id;
	@ColumnDefault("")private String organization_name;
	@ColumnDefault("")private String industry_id;
	@ColumnDefault("")private String industry_name;

	public EmployerDetailsDto() {
		// TODO Auto-generated constructor stub
	}

	public String getEmployer_id() {
		return employer_id;
	}

	public void setEmployer_id(String employer_id) {
		this.employer_id = employer_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getOrganization_name() {
		return organization_name;
	}

	public void setOrganization_name(String organization_name) {
		this.organization_name = organization_name;
	}

	public String getIndustry_id() {
		return industry_id;
	}

	public void setIndustry_id(String industry_id) {
		this.industry_id = industry_id;
	}

	public String getIndustry_name() {
		return industry_name;
	}

	public void setIndustry_name(String industry_name) {
		this.industry_name = industry_name;
	}
}
