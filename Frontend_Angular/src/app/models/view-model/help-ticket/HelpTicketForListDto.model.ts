export interface HelpTicketForListDto {
    hlp_tkt_id: string;
    topic: string;
    message: string;
    user_id: string;
    f_name: string;
    l_name: string;
    user_type: string;
}

export function getHelpTicketForListInstance(): HelpTicketForListDto {
    return {
        hlp_tkt_id: "",
        topic: "",
        message: "",
        user_id: "",
        f_name: "",
        l_name: "",
        user_type: "",
    }
}