export interface LoginCredDto {
    Username: string;
    Password: string;
}

export function getLoginCredInstance(): LoginCredDto {
    return {
        Username: "",
        Password: "",
    }
}