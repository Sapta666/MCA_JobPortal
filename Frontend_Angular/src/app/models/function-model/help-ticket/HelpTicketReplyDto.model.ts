export interface HelpTicketReplyDto {
    message: string;
    reply_admin_id: string;
}

export function getHelpTicketReplyInstance(): HelpTicketReplyDto {
    return {
        message: "",
        reply_admin_id: "",
    }
}