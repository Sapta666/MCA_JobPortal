export interface JobPostsDto {
    job_post_id: string;
    employer_id: string;
    topic: string;
    description: string;
    job_start_num_date: number;
    job_end_num_date: number;
    job_post_num_dat: number;
    job_post_dec_time: number;
    industry_id: string;
    job_type_id: string;
    industry_name: string;
    job_type: string;
    has_pre_application_data: string;
    pre_application_question: string;
}

export function getJobPostsInstance(): JobPostsDto {
    return {
        job_post_id: "",
        employer_id: "",
        topic: "",
        description: "",
        job_start_num_date: 0,
        job_end_num_date: 0,
        job_post_num_dat: 0,
        job_post_dec_time: 0,
        industry_id: "",
        job_type_id: "",
        industry_name: "",
        job_type: "",
        has_pre_application_data: "",
        pre_application_question: "",
    }
}