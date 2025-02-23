import { EmployerDetailsDto, getEmployerDetailsInstance } from "./EmployerDetailsDto.model";
import { UserInfoDto, getUserInfoInstance } from "./UserInfoDto.model"

export interface EmployerInfoDto {
    UserInfo: UserInfoDto;
    EmployerDetails: EmployerDetailsDto;
}

export function getEmployerInfoInstance(): EmployerInfoDto {
    return {
        UserInfo: { ...getUserInfoInstance() },
        EmployerDetails: { ...getEmployerDetailsInstance() }
    }
}