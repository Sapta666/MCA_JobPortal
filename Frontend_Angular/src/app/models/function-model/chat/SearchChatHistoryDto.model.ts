export interface SearchChatHistoryDto {
    employer_user_id: string;
    jobseeker_user_id: string;
}

export function getSearchChatHistoryInstance(): SearchChatHistoryDto {
    return {
        employer_user_id: "",
        jobseeker_user_id: "",
    }
}