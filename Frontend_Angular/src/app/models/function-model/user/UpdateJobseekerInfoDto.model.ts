import { JobseekerDetailsDto, getJobseekerDetailsInstance } from "../../view-model/user/JobseekerDetailsDto.model";
import { UserInfoDto, getUserInfoInstance } from "../../view-model/user/UserInfoDto.model";


export interface UpdateJobseekerInfoDto {
    UserInfo: UserInfoDto;
    JobseekerDetails: JobseekerDetailsDto;
}

export function getUpdateJobseekerInfoInstance(): UpdateJobseekerInfoDto {
    return {
        UserInfo: { ...getUserInfoInstance() },
        JobseekerDetails: { ...getJobseekerDetailsInstance() }
    }
}