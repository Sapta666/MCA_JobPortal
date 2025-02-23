export interface EmployerDetailsViewDto {
    employer_id: string;
    user_id: string;
    organization_name: string;
    industry_name: string;
    industry_id: string;
    f_name: string;
    l_name: string;
}

export function getEmployerDetailsViewInstance(): EmployerDetailsViewDto {
    return {
        employer_id: "",
        user_id: "",
        organization_name: "",
        industry_name: "",
        industry_id: "",
        f_name: "",
        l_name: "",
    }
}