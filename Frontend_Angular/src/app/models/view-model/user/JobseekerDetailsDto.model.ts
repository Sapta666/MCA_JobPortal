export interface JobseekerDetailsDto {
    jobseeker_id: string;
    user_id: string;
    school: string;
    school_2: string;
    graduation: string;
    masters: string;
    certifications: string;
    descr: string;
}

export function getJobseekerDetailsInstance(): JobseekerDetailsDto {
    return {
        jobseeker_id: "",
        user_id: "",
        school: "",
        school_2: "",
        graduation: "",
        masters: "",
        certifications: "",
        descr: "",
    }
}