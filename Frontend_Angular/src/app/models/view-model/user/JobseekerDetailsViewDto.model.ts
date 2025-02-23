export interface JobseekerDetailsViewDto {
    jobseeker_id: string;
    user_id: string;
    school: string;
    school_2: string;
    graduation: string;
    masters: string;
    certifications: string;
    descr: string;
    f_name: string;
    l_name: string;
}

export function getJobseekerDetailsViewInstance(): JobseekerDetailsViewDto {
    return {
        jobseeker_id: "",
        user_id: "",
        school: "",
        school_2: "",
        graduation: "",
        masters: "",
        certifications: "",
        descr: "",
        f_name: "",
        l_name: "",
    }
}
