export interface EmployerDetailsDto {
    employer_id: string;
    user_id: string;
    organization_name: string;
    industry_id: string;
    industry_name: string;
}

export function getEmployerDetailsInstance(): EmployerDetailsDto {
    return {
        employer_id: "",
        user_id: "",
        organization_name: "",
        industry_id: "",
        industry_name: "",
    }
}