import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BasicResponseDto } from "../models/function-model/BasicResponseDto.model";
import { RegisterUserDto } from "../models/function-model/user/RegisterUserDto.model";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";
import { UserInfoDto } from "../models/view-model/user/UserInfoDto.model";
import { JobseekerDetailsDto } from "../models/view-model/user/JobseekerDetailsDto.model";
import { JobseekerInfoDto } from "../models/view-model/user/JobseekerInfoDto.model";
import { UpdateJobseekerInfoDto } from "../models/function-model/user/UpdateJobseekerInfoDto.model";
import { UpdateEmployerInfoDto } from "../models/function-model/user/UpdateEmployerInfoDto.model";
import { EmployerInfoDto } from "../models/view-model/user/EmployerInfoDto.model";
import { FormControl } from "@angular/forms";
import { FileUploadDto } from "../models/function-model/user/FileUploadDto.model";
import { EmployerDetailsDto } from "../models/view-model/user/EmployerDetailsDto.model";
import { EmployerDetailsViewDto } from "../models/view-model/user/EmployerDetailsViewDto.model";
import { JobseekerDetailsViewDto } from "../models/view-model/user/JobseekerDetailsViewDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class UserService {

    constructor(
        private _http: HttpClient
    ) {

    }

    public registerUser(registerUser: RegisterUserDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/user/register`,registerUser);
    }

    public getUserInfo(user_id: string): Observable<ResponseDataDto<UserInfoDto>> {
        return this._http.get<ResponseDataDto<UserInfoDto>>(`{{baseUrl}}/user/${user_id}`);
    }

    public getJobseekerInfo(user_id: string): Observable<ResponseDataDto<JobseekerInfoDto>> {
        return this._http.get<ResponseDataDto<JobseekerInfoDto>>(`{{baseUrl}}/user/jobseeker/${user_id}`);
    }

    public updateJobseekerInfo(updateJobseekerInfo: UpdateJobseekerInfoDto): Observable<BasicResponseDto> {
        return this._http.put<BasicResponseDto>(`{{baseUrl}}/user/jobseeker`,updateJobseekerInfo);
    }

    public getJobseekerList(): Observable<ResponseDataDto<JobseekerDetailsViewDto[]>> {
        return this._http.get<ResponseDataDto<JobseekerDetailsViewDto[]>>(`{{baseUrl}}/user/jobseeker/list`);
    }

    public getEmployerList(): Observable<ResponseDataDto<EmployerDetailsViewDto[]>> {
        return this._http.get<ResponseDataDto<EmployerDetailsViewDto[]>>(`{{baseUrl}}/user/employer/list`);
    }

    public getEmployerInfo(user_id: string): Observable<ResponseDataDto<EmployerInfoDto>> {
        return this._http.get<ResponseDataDto<EmployerInfoDto>>(`{{baseUrl}}/user/employer/${user_id}`);
    }

    public updateEmployerInfo(updateEmployerInfo: UpdateEmployerInfoDto): Observable<BasicResponseDto> {
        return this._http.put<BasicResponseDto>(`{{baseUrl}}/user/employer`,updateEmployerInfo);
    }

    public uploadResume(fileUpload: FileUploadDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/user/upload/resume`,fileUpload);
    }

    public getUserResume(user_id: string): Observable<ResponseDataDto<string>> {
        return this._http.get<ResponseDataDto<string>>(`{{baseUrl}}/user/get/resume/base64/${user_id}`);
    }    

}