package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vw_admin_hlp_tkt")
public class HelpTicketForListDto {

    @Id
    private String hlp_tkt_id;
    private String topic;
    private String message;
    private String user_id;
    private String f_name;
    private String l_name;
    private String user_type;

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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
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

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }
}
