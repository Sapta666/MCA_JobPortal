export interface CreateJobPostsDto {
    employer_id: string;
    topic: string;
    description: string;
    industry_id: string;
    job_type_id: string;
    job_start_num_date: number;
    job_end_num_date: number;
    has_pre_application_data: string;
}

export function getCreateJobPostsInstance(): CreateJobPostsDto {
    return {
        employer_id: "",
        topic: "",
        description: "",
        industry_id: "",
        job_type_id: "",
        job_start_num_date: 0,
        job_end_num_date: 0,
        has_pre_application_data: "",
    }
}