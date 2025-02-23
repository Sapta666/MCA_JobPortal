package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "vw_jobseeker_details")
public class JobseekerDetailsViewDto {
    
    @Id
    private String jobseeker_id;
    private String user_id;
    private String school;
    private String school_2;
    private String graduation;
    private String masters;
    private String certifications;
    private String descr;
    private String f_name;
    private String l_name;

    public String getJobseeker_id() {
        return jobseeker_id;
    }

    public void setJobseeker_id(String jobseeker_id) {
        this.jobseeker_id = jobseeker_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getSchool_2() {
        return school_2;
    }

    public void setSchool_2(String school_2) {
        this.school_2 = school_2;
    }

    public String getGraduation() {
        return graduation;
    }

    public void setGraduation(String graduation) {
        this.graduation = graduation;
    }

    public String getMasters() {
        return masters;
    }

    public void setMasters(String masters) {
        this.masters = masters;
    }

    public String getCertifications() {
        return certifications;
    }

    public void setCertifications(String certifications) {
        this.certifications = certifications;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
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
}
