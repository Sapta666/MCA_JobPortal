import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";
import { EmployerReportViewDto } from "../models/view-model/report/EmployerReportViewDto.model";
import { JobseekerReportViewDto } from "../models/view-model/report/JobseekerReportViewDto.model";
import { BasicStatusDto } from "../models/view-model/report/BasicStatusDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class ReportService {

    constructor(
        private _http: HttpClient
    ) {

    }

    public getEmployerReport(): Observable<ResponseDataDto<EmployerReportViewDto[]>> {
        return this._http.get<ResponseDataDto<EmployerReportViewDto[]>>(`{{baseUrl}}/reports/employerReport`);
    }

    public getJobseekerReport(): Observable<ResponseDataDto<JobseekerReportViewDto[]>> {
        return this._http.get<ResponseDataDto<JobseekerReportViewDto[]>>(`{{baseUrl}}/reports/jobseekerReport`);
    }

    public getBasicStatus(): Observable<ResponseDataDto<BasicStatusDto>> {
        return this._http.get<ResponseDataDto<BasicStatusDto>>(`{{baseUrl}}/reports/basicStatus`);
    }

}