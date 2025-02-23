export interface JobApplicationViewDto {
    job_app_id: string;
    jobseeker_id: string;
    job_app_num_dat: number;
    job_app_dec_time: number;
    job_post_id: string;
    employer_id: string;
    topic: string;
    description: string;
    job_post_num_dat: number;
    job_post_dec_time: number;
    job_start_num_date: number;
    job_end_num_date: number;
    industry_id: string;
    job_type_id: string;
    industry_name: string;
    job_type: string;
    has_pre_application_data: string;
    pre_application_question: string;
}

export function getJobApplicationsViewInstance(): JobApplicationViewDto {
    return {
        job_app_id: "",
        jobseeker_id: "",
        job_app_num_dat: 0,
        job_app_dec_time: 0,
        job_post_id: "",
        employer_id: "",
        topic: "",
        description: "",
        job_post_num_dat: 0,
        job_post_dec_time: 0,
        job_start_num_date: 0,
        job_end_num_date: 0,
        industry_id: "",
        job_type_id: "",
        industry_name: "",
        job_type: "",
        has_pre_application_data: "",
        pre_application_question: "",
    }
}