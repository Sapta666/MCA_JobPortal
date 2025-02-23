package com.jobportal.services.dao;

import com.jobportal.models.db.*;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.view.reports.BasicStatusDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportsDaoService {

    private SessionFactory _sessionFactory = null;

    @Autowired private StoredProceduresUserService _storedProceduresUserService;

    @Autowired public ReportsDaoService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

    public OperationResultDto<EmployerReportViewDto[]> getEmployerReport() {
        OperationResultDto<EmployerReportViewDto[]> result = new OperationResultDto<EmployerReportViewDto[]>();
        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();
            boolean userFilterActive = false;
            String sqlString = "from EmployerReportViewDto";

            Query<EmployerReportViewDto> query = session.createQuery(sqlString,EmployerReportViewDto.class);

            List<EmployerReportViewDto> resultSet = query.list();

            result.set_isSuccess(true);
            result.set_data(resultSet.toArray(new EmployerReportViewDto[0]));
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

    public OperationResultDto<JobseekerReportViewDto[]> getJobseekerReport() {
        OperationResultDto<JobseekerReportViewDto[]> result = new OperationResultDto<JobseekerReportViewDto[]>();
        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();
            boolean userFilterActive = false;
            String sqlString = "from JobseekerReportViewDto";

            Query<JobseekerReportViewDto> query = session.createQuery(sqlString,JobseekerReportViewDto.class);

            List<JobseekerReportViewDto> resultSet = query.list();

            result.set_isSuccess(true);
            result.set_data(resultSet.toArray(new JobseekerReportViewDto[0]));
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

    public OperationResultDto<BasicStatusDto> getBasicStatusCounts() {
        OperationResultDto<BasicStatusDto> result = new OperationResultDto<BasicStatusDto>();
        BasicStatusDto basicStatus = new BasicStatusDto();

        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();

            String sqlString = "from EmployerDetailsDto";
            Query<EmployerDetailsDto> query_1 = session.createQuery(sqlString, EmployerDetailsDto.class);
            List<EmployerDetailsDto> resultSet_1 = query_1.list();
            basicStatus.setEmployer_count(resultSet_1.size());

            sqlString = "from JobseekerDetailsDto";
            Query<JobseekerDetailsDto> query_2 = session.createQuery(sqlString, JobseekerDetailsDto.class);
            List<JobseekerDetailsDto> resultSet_2 = query_2.list();
            basicStatus.setJobseeker_count(resultSet_2.size());

            sqlString = "from JobPostDto";
            Query<JobPostDto> query_3 = session.createQuery(sqlString, JobPostDto.class);
            List<JobPostDto> resultSet_3 = query_3.list();
            basicStatus.setJob_post_count(resultSet_3.size());

            sqlString = "from HelpTicketDetailsDto";
            Query<HelpTicketDetailsDto> query_4 = session.createQuery(sqlString, HelpTicketDetailsDto.class);
            List<HelpTicketDetailsDto> resultSet_4 = query_4.list();
            basicStatus.setHelp_ticket_count(resultSet_4.size());

            sqlString = "from JobApplicationsDto";
            Query<JobApplicationsDto> query_5 = session.createQuery(sqlString, JobApplicationsDto.class);
            List<JobApplicationsDto> resultSet_5 = query_5.list();
            basicStatus.setJob_application_count(resultSet_5.size());

            result.set_isSuccess(true);
            result.set_data(basicStatus);
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

}
