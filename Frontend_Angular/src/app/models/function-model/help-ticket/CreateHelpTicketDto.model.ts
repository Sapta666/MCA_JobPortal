export interface CreateHelpTicketDto {
    user_id: string;
    topic_id: string;
    help_ticket_message: string;
}

export function getCreateHelpTicketInstance(): CreateHelpTicketDto {
    return {
        user_id: "",
        topic_id: "",
        help_ticket_message: "",
    }
}