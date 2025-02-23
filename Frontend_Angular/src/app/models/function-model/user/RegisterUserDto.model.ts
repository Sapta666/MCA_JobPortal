import { EmployerDetailsDto, getEmployerDetailsInstance } from "../../view-model/user/EmployerDetailsDto.model";
import { JobseekerDetailsDto, getJobseekerDetailsInstance } from "../../view-model/user/JobseekerDetailsDto.model";
import { UserInfoDto, getUserInfoInstance } from "../../view-model/user/UserInfoDto.model";

export interface RegisterUserDto {
    userInfo: UserInfoDto;
    jobseekerDetails: JobseekerDetailsDto;
    employerDetails: EmployerDetailsDto;
}

export function getRegiserUserInstance(): RegisterUserDto {
    return {
        userInfo: { ...getUserInfoInstance() },
        jobseekerDetails: { ...getJobseekerDetailsInstance() },
        employerDetails: { ...getEmployerDetailsInstance() }
    }

}
