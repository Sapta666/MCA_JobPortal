package com.jobportal.models.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "chat_history")
public class ChatHistoryDto {

    @Id
    private String chat_history_id = "";
    private String chat_id = "";
    private String user_id = "";
    private String message = "";
    private int message_num_date = 0;
    private int message_dec_time = 0;

    public String getChat_history_id() {
        return chat_history_id;
    }

    public void setChat_history_id(String chat_history_id) {
        this.chat_history_id = chat_history_id;
    }

    public String getChat_id() {
        return chat_id;
    }

    public void setChat_id(String chat_id) {
        this.chat_id = chat_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getMessage_num_date() {
        return message_num_date;
    }

    public void setMessage_num_date(int message_num_date) {
        this.message_num_date = message_num_date;
    }

    public int getMessage_dec_time() {
        return message_dec_time;
    }

    public void setMessage_dec_time(int message_dec_time) {
        this.message_dec_time = message_dec_time;
    }
}
