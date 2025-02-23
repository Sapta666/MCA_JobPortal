export interface CreateNewChatDto {
    message: string;
    employer_id: string;
    jobseeker_id: string;
    user_id: string;
}

export function getCreateNewChatInstance(): CreateNewChatDto {
    return {
        message: "",
        employer_id: "",
        jobseeker_id: "",
        user_id: "",
    }
}