package com.jobportal.services.dao;

import java.sql.CallableStatement;
import java.sql.Types;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.db.EmployerDetailsDto;
import com.jobportal.models.db.JobseekerDetailsDto;
import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.DateUtils;
import com.jobportal.utils.HelperUtils;

import jakarta.persistence.ParameterMode;

@Service
public class StoredProceduresUserService {

	private SessionFactory _sessionFactory = null;

	public StoredProceduresUserService() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public StoredProceduresUserService(DBUtils dbUtils) {
		this._sessionFactory= dbUtils.getSessionFactory();
	}

	public OperationResultDto<Object> updateUserInfo(UserInfoDto userInfo) {
		OperationResultDto<Object> operationResult = new OperationResultDto<Object>();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.doReturningWork(connection -> {
				try (CallableStatement stmt = connection.prepareCall("{ call sp_update_user_info("+HelperUtils.getStoredProcedureParamString(17)+") }")) {
					stmt.setString(1, userInfo.getUser_id());
					stmt.setString(2, userInfo.getUser_name());
					stmt.setString(3, userInfo.getPassword());
					stmt.setString(4, userInfo.getAddress());
					stmt.setString(5, userInfo.getAddress_2());
					stmt.setInt(6, userInfo.getPh_no());
					stmt.setString(7, userInfo.getEmail_id());
					stmt.setString(8, userInfo.getUser_type());
					stmt.setString(9, userInfo.getUser_status());
					stmt.setInt(10, userInfo.getDob_num_date());
					stmt.setString(11, userInfo.getGender());
					stmt.setString(12, userInfo.getCountry_code());
					stmt.setString(13, userInfo.getState_code());
					stmt.setString(14, userInfo.getCity());
					stmt.setInt(15, userInfo.getZip());
					stmt.setString(16, userInfo.getF_name());
					stmt.setString(17, userInfo.getL_name());

					stmt.executeUpdate();			

				}
				return null;});


			operationResult.set_isSuccess(true); 
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_message(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			transaction.rollback();
		}    	    	

		return operationResult;
	}

	public OperationResultDto<String> updateJobseekerDetails(JobseekerDetailsDto jobseekerDetails) {
		OperationResultDto operationResult = new OperationResultDto();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			ProcedureCall procedureCall = session.createStoredProcedureCall("sp_update_jobseeker_details");

			procedureCall.registerStoredProcedureParameter("p_JOBSEEKER_ID", String.class, ParameterMode.IN).setParameter("p_JOBSEEKER_ID", jobseekerDetails.getJobseeker_id());
			procedureCall.registerStoredProcedureParameter("p_USER_ID", String.class, ParameterMode.IN).setParameter("p_USER_ID",jobseekerDetails.getUser_id());
			procedureCall.registerStoredProcedureParameter("p_SCHOOL", String.class, ParameterMode.IN).setParameter("p_SCHOOL",jobseekerDetails.getSchool());
			procedureCall.registerStoredProcedureParameter("p_SCHOOL_2", String.class, ParameterMode.IN).setParameter("p_SCHOOL_2",jobseekerDetails.getSchool_2());
			procedureCall.registerStoredProcedureParameter("p_GRADUATION", String.class, ParameterMode.IN).setParameter("p_GRADUATION",jobseekerDetails.getGraduation());
			procedureCall.registerStoredProcedureParameter("p_MASTERS", String.class, ParameterMode.IN).setParameter("p_MASTERS",jobseekerDetails.getMasters());
			procedureCall.registerStoredProcedureParameter("p_CERTIFICATIONS", String.class, ParameterMode.IN).setParameter("p_CERTIFICATIONS",jobseekerDetails.getCertifications());
			procedureCall.registerStoredProcedureParameter("p_DESCR", String.class, ParameterMode.IN).setParameter("p_DESCR",jobseekerDetails.getDescr());
			
			procedureCall.executeUpdate();

			// Execute the stored procedure
			operationResult.set_isSuccess(true);
			
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_message(HelperUtils.convertStackTraceToString(e));
			transaction.rollback();
		}    	    	

		return operationResult;
	}
	
	public OperationResultDto<String> updateEmployerInfo(EmployerDetailsDto employerDetails) {
		OperationResultDto operationResult = new OperationResultDto();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			ProcedureCall procedureCall = session.createStoredProcedureCall("sp_update_employer_details");

			procedureCall.registerStoredProcedureParameter("p_EMPLOYER_ID", String.class, ParameterMode.IN).setParameter("p_EMPLOYER_ID", employerDetails.getEmployer_id());
			procedureCall.registerStoredProcedureParameter("p_USER_ID", String.class, ParameterMode.IN).setParameter("p_USER_ID",employerDetails.getUser_id());
			procedureCall.registerStoredProcedureParameter("p_ORGANIZATION_NAME", String.class, ParameterMode.IN).setParameter("p_ORGANIZATION_NAME",employerDetails.getOrganization_name());
			procedureCall.registerStoredProcedureParameter("p_INDUSTRY_ID", String.class, ParameterMode.IN).setParameter("p_INDUSTRY_ID",employerDetails.getIndustry_id());			
			
			procedureCall.executeUpdate();

			// Execute the stored procedure
			operationResult.set_isSuccess(true);
			
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_message(HelperUtils.convertStackTraceToString(e));
			transaction.rollback();
		}    	    	

		return operationResult;
	}

}
