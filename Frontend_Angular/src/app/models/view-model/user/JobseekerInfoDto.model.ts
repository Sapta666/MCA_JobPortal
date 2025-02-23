import { JobseekerDetailsDto, getJobseekerDetailsInstance } from "./JobseekerDetailsDto.model";
import { UserInfoDto, getUserInfoInstance } from "./UserInfoDto.model";

export interface JobseekerInfoDto {
    UserInfo: UserInfoDto;
    JobseekerDetails: JobseekerDetailsDto;
}

export function getJobseekerInfoInstance(): JobseekerInfoDto {
    return {
        UserInfo: { ...getUserInfoInstance() },
        JobseekerDetails: { ...getJobseekerDetailsInstance() }
    }
}