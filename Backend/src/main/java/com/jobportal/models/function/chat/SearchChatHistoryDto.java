package com.jobportal.models.function.chat;

public class SearchChatHistoryDto {

    private String employer_user_id = "";
    private String jobseeker_user_id = "";

    public String getEmployer_user_id() {
        return employer_user_id;
    }

    public void setEmployer_user_id(String employer_user_id) {
        this.employer_user_id = employer_user_id;
    }

    public String getJobseeker_user_id() {
        return jobseeker_user_id;
    }

    public void setJobseeker_user_id(String jobseeker_user_id) {
        this.jobseeker_user_id = jobseeker_user_id;
    }
}
