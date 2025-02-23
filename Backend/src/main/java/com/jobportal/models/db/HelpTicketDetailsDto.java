package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hlp_tkt_details")
public class HelpTicketDetailsDto {

    @Id
    private String hlp_tkt_id;
    private String message;
    private String topic_id;
    private String user_id;
    private String rply_admin_id;
    private String rply_message;
    private String topic;

    public String getRply_message() {
        return rply_message;
    }

    public void setRply_message(String rply_message) {
        this.rply_message = rply_message;
    }

    public String getRply_admin_id() {
        return rply_admin_id;
    }

    public void setRply_admin_id(String rply_admin_id) {
        this.rply_admin_id = rply_admin_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(String topic_id) {
        this.topic_id = topic_id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getHlp_tkt_id() {
        return hlp_tkt_id;
    }

    public void setHlp_tkt_id(String hlp_tkt_id) {
        this.hlp_tkt_id = hlp_tkt_id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
}
