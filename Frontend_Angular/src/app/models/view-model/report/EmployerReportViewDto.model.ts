export interface EmployerReportViewDto {
    employer_id: string;
    organization_name: string;
    industry_id: string;
    industry_name: string;
    user_id: string;
    user_name: string;
    password: string;
    address: string;
    ph_no: number;
    email_id: string;
    user_type: string;
    user_status: string;
    address_2: string;
    dob_num_date: number;
    gender: string;
    country_code: string;
    state_code: string;
    city: string;
    zip: number;
    f_name: string;
    l_name: string;
    job_post_cnt: number;
    hlp_tkt_cnt: number;
}

export function getEmployerReportViewInstance(): EmployerReportViewDto {
    return {
        employer_id: "",
        organization_name: "",
        industry_id: "",
        industry_name: "",
        user_id: "",
        user_name: "",
        password: "",
        address: "",
        ph_no: 0,
        email_id: "",
        user_type: "",
        user_status: "",
        address_2: "",
        dob_num_date: 0,
        gender: "",
        country_code: "",
        state_code: "",
        city: "",
        zip: 0,
        f_name: "",
        l_name: "",
        job_post_cnt: 0,
        hlp_tkt_cnt: 0,
    }
}