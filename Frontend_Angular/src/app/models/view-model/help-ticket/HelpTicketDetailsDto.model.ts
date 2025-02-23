export interface HelpTicketDetailsDto {
    hlp_tkt_id: string;
    message: string;
    topic_id: string;
    user_id: string;
    rply_admin_id: string;
    rply_message: string;
    topic: string;
}

export function getHelpTicketDetailsInstance(): HelpTicketDetailsDto {
    return {
        hlp_tkt_id: "",
        message: "",
        topic_id: "",
        user_id: "",
        rply_admin_id: "",
        rply_message: "",
        topic: "",
    }
}