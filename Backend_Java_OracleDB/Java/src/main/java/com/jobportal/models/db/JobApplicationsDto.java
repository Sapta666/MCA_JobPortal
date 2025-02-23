package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "job_applications")
public class JobApplicationsDto {

    @Id
    private String job_app_id;
    private String jobseeker_id;
    private String job_post_id;
    private int job_app_num_dat;
    private int job_app_dec_time;
    private String pre_app_id;

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

    public String getJob_post_id() {
        return job_post_id;
    }

    public void setJob_post_id(String job_post_id) {
        this.job_post_id = job_post_id;
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

    public String getPre_app_id() {
        return pre_app_id;
    }

    public void setPre_app_id(String pre_app_id) {
        this.pre_app_id = pre_app_id;
    }
}
