package com.jobportal.models.db;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity()
@Table( name = "user_info" )
public class UserInfoDto {
	
	@Id
	@ColumnDefault("") private String user_id;
	@ColumnDefault("") private String user_name;    
	@ColumnDefault("") private String password;
	@ColumnDefault("") private String f_name;
	@ColumnDefault("") private String l_name;
	@ColumnDefault("") private String address;
	@ColumnDefault("") private String address_2;
	@ColumnDefault("0") private int dob_num_date;
	@ColumnDefault("") private String gender;
	@ColumnDefault("") private String country_code;
	@ColumnDefault("") private String state_code;
	@ColumnDefault("") private String city;
	@ColumnDefault("0") private int zip;        
	@ColumnDefault("0") private int ph_no;
	@ColumnDefault("") private String email_id;
	@ColumnDefault("") private String user_type;
	@ColumnDefault("") private String user_status;

	public UserInfoDto() {

	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}	

	public String getF_name() {
		return f_name;
	}

	public void setF_name(String f_name) {
		this.f_name = f_name;
	}

	public String getL_name() {
		return l_name;
	}

	public void setL_name(String l_name) {
		this.l_name = l_name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAddress_2() {
		return address_2;
	}

	public void setAddress_2(String address_2) {
		this.address_2 = address_2;
	}

	public int getDob_num_date() {
		return dob_num_date;
	}

	public void setDob_num_date(int dob_num_date) {
		this.dob_num_date = dob_num_date;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCountry_code() {
		return country_code;
	}

	public void setCountry_code(String country_code) {
		this.country_code = country_code;
	}

	public String getState_code() {
		return state_code;
	}

	public void setState_code(String state_code) {
		this.state_code = state_code;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public int getPh_no() {
		return ph_no;
	}

	public void setPh_no(int ph_no) {
		this.ph_no = ph_no;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public String getUser_status() {
		return user_status;
	}

	public void setUser_status(String user_status) {
		this.user_status = user_status;
	}	

}
