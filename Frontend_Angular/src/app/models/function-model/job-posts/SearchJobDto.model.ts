export interface SearchJobDto {
    topic: string;
	description: string;
	job_type_id: string;
	industry_id: string;
	job_start_num_date: number;
	job_end_num_date: number;
    employer_id: string;
}

export function getSearchJobInstance(): SearchJobDto {
    return {
        topic: "",
        description: "",
        job_type_id: "",
        industry_id: "",
        job_start_num_date: 0,
        job_end_num_date: 0,
        employer_id: "",
    }
}