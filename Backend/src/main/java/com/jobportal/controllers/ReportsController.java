package com.jobportal.controllers;

import com.jobportal.models.db.EmployerReportViewDto;
import com.jobportal.models.db.JobseekerReportViewDto;
import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;
import com.jobportal.models.function.chat.CreateNewChatDto;
import com.jobportal.models.view.reports.BasicStatusDto;
import com.jobportal.services.ReportsService;
import com.jobportal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/reports")
public class ReportsController {

    @Autowired
    private ReportsService _reportsService;

    public ReportsController() {
        // TODO Auto-generated constructor stub
    }

    @GetMapping("/employerReport")
    public ResponseDataDto<EmployerReportViewDto[]> getEmployerReport() {
        ResponseDataDto<EmployerReportViewDto[]> response = new ResponseDataDto<EmployerReportViewDto[]>();
        OperationResultDto<EmployerReportViewDto[]> result = new OperationResultDto<EmployerReportViewDto[]>();

        result = this._reportsService.getEmployerReport();

        if(result.get_isSuccess()) {
            response.setStatus("Success");
            response.setData(result.get_data());
        } else {
            response.setMessage(result.get_message());
            response.setStatus("Failed");
        }

        return response;
    }

    @GetMapping("/jobseekerReport")
    public ResponseDataDto<JobseekerReportViewDto[]> getJobseekerReport() {
        ResponseDataDto<JobseekerReportViewDto[]> response = new ResponseDataDto<JobseekerReportViewDto[]>();
        OperationResultDto<JobseekerReportViewDto[]> result = new OperationResultDto<JobseekerReportViewDto[]>();

        result = this._reportsService.getJobseekerReport();

        if(result.get_isSuccess()) {
            response.setStatus("Success");
            response.setData(result.get_data());
        } else {
            response.setMessage(result.get_message());
            response.setStatus("Failed");
        }

        return response;
    }

    @GetMapping("/basicStatus")
    public ResponseDataDto<BasicStatusDto> basicStatus() {
        ResponseDataDto<BasicStatusDto> response = new ResponseDataDto<BasicStatusDto>();
        OperationResultDto<BasicStatusDto> result = new OperationResultDto<BasicStatusDto>();

        result = this._reportsService.getBasicStatus();

        if(result.get_isSuccess()) {
            response.setStatus("Success");
            response.setData(result.get_data());
        } else {
            response.setMessage(result.get_message());
            response.setStatus("Failed");
        }

        return response;
    }

}
