package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "vw_employer_report")
public class EmployerReportViewDto {

    @Id
    private String employer_id;
    private String organization_name;
    private String industry_id;
    private String industry_name;
    private String user_id;
    private String user_name;
    private String password;
    private String address;
    @ColumnDefault("0") private Integer ph_no;
    private String email_id;
    private String user_type;
    private String user_status;
    private String address_2;
    @ColumnDefault("0") private Integer dob_num_date;
    private String gender;
    private String country_code;
    private String state_code;
    private String city;
    @ColumnDefault("0") private int zip;
    private String f_name;
    private String l_name;
    @ColumnDefault("0") private Integer job_post_cnt;
    @ColumnDefault("0") private Integer hlp_tkt_cnt;

    public String getEmployer_id() {
        return employer_id;
    }

    public void setEmployer_id(String employer_id) {
        this.employer_id = employer_id;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPh_no() {
        return ph_no;
    }

    public void setPh_no(Integer ph_no) {
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

    public String getAddress_2() {
        return address_2;
    }

    public void setAddress_2(String address_2) {
        this.address_2 = address_2;
    }

    public Integer getDob_num_date() {
        return dob_num_date;
    }

    public void setDob_num_date(Integer dob_num_date) {
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

    public Integer getJob_post_cnt() {
        return job_post_cnt;
    }

    public void setJob_post_cnt(Integer job_post_cnt) {
        this.job_post_cnt = job_post_cnt;
    }

    public Integer getHlp_tkt_cnt() {
        return hlp_tkt_cnt;
    }

    public void setHlp_tkt_cnt(Integer hlp_tkt_cnt) {
        this.hlp_tkt_cnt = hlp_tkt_cnt;
    }
}
