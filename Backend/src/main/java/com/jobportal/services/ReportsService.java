package com.jobportal.services;

import com.jobportal.models.db.EmployerReportViewDto;
import com.jobportal.models.db.JobseekerReportViewDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.view.reports.BasicStatusDto;
import com.jobportal.services.dao.ReportsDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportsService {

    @Autowired
    private ReportsDaoService _reportDaoService;

    public OperationResultDto<EmployerReportViewDto[]> getEmployerReport() {
        OperationResultDto<EmployerReportViewDto[]> result = new OperationResultDto<EmployerReportViewDto[]>();
        result = this._reportDaoService.getEmployerReport();

        return result;
    }

    public OperationResultDto<JobseekerReportViewDto[]> getJobseekerReport() {
        OperationResultDto<JobseekerReportViewDto[]> result = new OperationResultDto<JobseekerReportViewDto[]>();
        result = this._reportDaoService.getJobseekerReport();

        return result;
    }

    public OperationResultDto<BasicStatusDto> getBasicStatus() {
        OperationResultDto<BasicStatusDto> result = new OperationResultDto<BasicStatusDto>();
        result = this._reportDaoService.getBasicStatusCounts();

        return result;
    }

}
