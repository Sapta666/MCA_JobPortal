package com.jobportal.models.view.reports;

public class BasicStatusDto {

    private int employer_count = 0;
    private int jobseeker_count = 0;
    private int help_ticket_count = 0;
    private int job_post_count = 0;
    private int job_application_count = 0;

    public int getEmployer_count() {
        return employer_count;
    }

    public void setEmployer_count(int employer_count) {
        this.employer_count = employer_count;
    }

    public int getJobseeker_count() {
        return jobseeker_count;
    }

    public void setJobseeker_count(int jobseeker_count) {
        this.jobseeker_count = jobseeker_count;
    }

    public int getHelp_ticket_count() {
        return help_ticket_count;
    }

    public void setHelp_ticket_count(int help_ticket_count) {
        this.help_ticket_count = help_ticket_count;
    }

    public int getJob_post_count() {
        return job_post_count;
    }

    public void setJob_post_count(int job_post_count) {
        this.job_post_count = job_post_count;
    }

    public int getJob_application_count() {
        return job_application_count;
    }

    public void setJob_application_count(int job_application_count) {
        this.job_application_count = job_application_count;
    }
}
