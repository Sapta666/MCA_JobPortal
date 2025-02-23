package com.jobportal.models.db;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vw_jobseeker_applications")
public class JobseekerApplicationViewDto {

    @Id
    private String job_app_id;
    private String jobseeker_id;
    private int job_app_num_dat;
    private int job_app_dec_time;
    private String job_post_id;
    private String employer_id;
    private String topic;
    private String description;
    private int job_post_num_dat;
    private int job_post_dec_time;
    private int job_start_num_date;
    private int job_end_num_date;
    private String industry_id;
    private String job_type_id;
    private String industry_name;
    private String job_type;
    private String has_pre_application_data;
    private String pre_application_question;

    public String getJob_app_id() {
        return job_app_id;
    }

    public void setJob_app_id(String job_app_id) {
        this.job_app_id = job_app_id;
    }

    public String getJobseeker_id() {
        return jobseeker_id;
    }

    public void setJobseeker_id(String jobseeker_id) {
        this.jobseeker_id = jobseeker_id;
    }

    public int getJob_app_num_dat() {
        return job_app_num_dat;
    }

    public void setJob_app_num_dat(int job_app_num_dat) {
        this.job_app_num_dat = job_app_num_dat;
    }

    public int getJob_app_dec_time() {
        return job_app_dec_time;
    }

    public void setJob_app_dec_time(int job_app_dec_time) {
        this.job_app_dec_time = job_app_dec_time;
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
