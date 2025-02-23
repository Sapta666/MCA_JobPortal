package com.jobportal.models.function.helpticket;

public class CreateHelpTicketDto {
	
	private String user_id;
	private String topic_id;
	private String help_ticket_message;

	public CreateHelpTicketDto() {
		// TODO Auto-generated constructor stub
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

	public String getHelp_ticket_message() {
		return help_ticket_message;
	}

	public void setHelp_ticket_message(String help_ticket_message) {
		this.help_ticket_message = help_ticket_message;
	}
	
}
