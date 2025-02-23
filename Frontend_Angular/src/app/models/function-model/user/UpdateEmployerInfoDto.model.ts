import { EmployerDetailsDto, getEmployerDetailsInstance } from "../../view-model/user/EmployerDetailsDto.model";
import { UserInfoDto, getUserInfoInstance } from "../../view-model/user/UserInfoDto.model";

export interface UpdateEmployerInfoDto {
    UserInfo: UserInfoDto;
    EmployerDetails: EmployerDetailsDto;
}

export function getUpdateEmployerInfoInstance(): UpdateEmployerInfoDto { 
    return {
        UserInfo: { ...getUserInfoInstance() },
        EmployerDetails: { ...getEmployerDetailsInstance() }
    }
}