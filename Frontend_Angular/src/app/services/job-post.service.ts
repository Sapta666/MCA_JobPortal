import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateJobPostsDto } from "../models/function-model/job-posts/CreateJobPostsDto.model";
import { Observable } from "rxjs";
import { BasicResponseDto } from "../models/function-model/BasicResponseDto.model";
import { SearchJobDto } from "../models/function-model/job-posts/SearchJobDto.model";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";
import { JobPostsDto } from "../models/view-model/job-posts/JobPostsDto.model";
import { ApplyToJobDto } from "../models/function-model/job-posts/ApplyToJobDto.model";
import { JobApplicationViewDto } from "../models/view-model/job-posts/JobApplicationsViewDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class JobPostService {

    constructor(
        private _http: HttpClient
    ) {

    }

    public postJob(ceateJobPost: CreateJobPostsDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/jobPosts/postJob`,ceateJobPost);
    }

    public searchJobs(searchJob: SearchJobDto): Observable<ResponseDataDto<JobPostsDto[]>> {
        return this._http.post<ResponseDataDto<JobPostsDto[]>>(`{{baseUrl}}/jobPosts/search`,searchJob);
    }

    public getJobPostInfo(job_post_id: string): Observable<ResponseDataDto<JobPostsDto>> {
        return this._http.get<ResponseDataDto<JobPostsDto>>(`{{baseUrl}}/jobPosts/${job_post_id}`);
    }

    public applyToJob(applyToJob: ApplyToJobDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/jobPosts/apply`,applyToJob);
    }

    public searchJobApplications(jobseeker_id: string = ""): Observable<ResponseDataDto<JobApplicationViewDto[]>> {
        return this._http.get<ResponseDataDto<JobApplicationViewDto[]>>(`{{baseUrl}}/jobPosts/jobApplications/search?jobseeker_id=${jobseeker_id}`);
    }

}