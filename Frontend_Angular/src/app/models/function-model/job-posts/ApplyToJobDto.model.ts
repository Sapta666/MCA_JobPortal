export interface ApplyToJobDto {
    job_post_id: string;
    jobseeker_id: string;
    pre_application_data: string;
}

export function getApplyToJobInstance(): ApplyToJobDto {
    return {
        job_post_id: "",
        jobseeker_id: "",
        pre_application_data: "",
    }
}