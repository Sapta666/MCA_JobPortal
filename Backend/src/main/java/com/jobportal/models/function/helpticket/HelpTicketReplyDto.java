package com.jobportal.models.function.helpticket;

public class HelpTicketReplyDto {

    private String message;
    private String reply_admin_id;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getReply_admin_id() {
        return reply_admin_id;
    }

    public void setReply_admin_id(String reply_admin_id) {
        this.reply_admin_id = reply_admin_id;
    }
}
