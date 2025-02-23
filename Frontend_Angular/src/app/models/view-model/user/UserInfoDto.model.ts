export interface UserInfoDto {
    user_id: string;
    user_name: string;
    password: string;
    f_name: string;
    l_name: string;
    address: string;
    address_2: string;
    dob_num_date: number;
    gender: string;
    country_code: string;
    state_code: string;
    city: string;
    zip: number;
    ph_no: number;
    email_id: string;
    user_type: string;
    user_status: string;
}

export function getUserInfoInstance(): UserInfoDto {
    return {
        user_id: "",
        user_name: "",
        password: "",
        f_name: "",
        l_name: "",
        address: "",
        address_2: "",
        dob_num_date: 0,
        gender: "",
        country_code: "",
        state_code: "",
        city: "",
        zip: 0,
        ph_no: 0,
        email_id: "",
        user_type: "",
        user_status: "",
    }
}