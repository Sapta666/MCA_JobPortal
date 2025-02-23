export interface BasicStatusDto {
    employer_count: number;
    jobseeker_count: number;
    help_ticket_count: number;
    job_post_count: number;
    job_application_count: number;
}

export function getBasicStatusInstance(): BasicStatusDto {
    return {
        employer_count: 0,
        jobseeker_count: 0,
        help_ticket_count: 0,
        job_post_count: 0,
        job_application_count: 0,
    }
}