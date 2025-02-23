export interface JobseekerReportViewDto {
    jobseeker_id: string;
    school: string;
    school_2: string;
    graduation: string;
    masters: string;
    certifications: string;
    descr: string;
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
    job_app_cnt: number;
    hlp_tkt_cnt: number;
}

export function getJobseekerReportViewInstance(): JobseekerReportViewDto {
    return {
        jobseeker_id: "",
        school: "",
        school_2: "",
        graduation: "",
        masters: "",
        certifications: "",
        descr: "",
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
        job_app_cnt: 0,
        hlp_tkt_cnt: 0,
    }
}