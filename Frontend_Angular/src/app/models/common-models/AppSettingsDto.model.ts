export interface AppSettingsDto {
    user_type: string;
    user_id: string;
    user_name: string;
    f_name: string;
    l_name: string;
    employer_id: string;
    jobseeker_id: string;
}

export function getAppSettingsInstance(): AppSettingsDto {
    return {
        user_type: "",
        user_id: "",
        user_name: "",
        f_name: "",
        l_name: "",
        employer_id: "",
        jobseeker_id: "",
    }
}