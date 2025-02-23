export interface ChatHistoryDto {
    chat_history_id: string;
    chat_id: string;
    user_id: string;
    message: string;
    message_num_date: number;
    message_dec_time: number;
}

export function getChatHistoryInstancer(): ChatHistoryDto {
    return {
        chat_history_id: "",
        chat_id: "",
        user_id: "",
        message: "",
        message_num_date: 0,
        message_dec_time: 0,
    }
}