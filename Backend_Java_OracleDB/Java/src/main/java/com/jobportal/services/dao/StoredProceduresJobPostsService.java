package com.jobportal.services.dao;

import java.sql.CallableStatement;
import java.sql.Types;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.db.JobseekerDetailsDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.jobposts.ApplyToJobDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.DateUtils;
import com.jobportal.utils.HelperUtils;

import jakarta.persistence.ParameterMode;

@Service
public class StoredProceduresJobPostsService {

	private SessionFactory _sessionFactory = null;	

	@Autowired
	public StoredProceduresJobPostsService(DBUtils dbUtils) {
		this._sessionFactory= dbUtils.getSessionFactory();
	}	

	public OperationResultDto<String> insertJobPosts(CreateJobPostDto createJobPost) {
		OperationResultDto<String> operationResult = new OperationResultDto<String>();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.doReturningWork(connection -> {
				try (CallableStatement stmt = connection.prepareCall("{ call sp_insert_into_job_post(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) }")) {
					stmt.registerOutParameter(1, Types.VARCHAR);
					stmt.setString(2,createJobPost.getEmployer_id());
					stmt.setString(3,createJobPost.getTopic());
					stmt.setString(4,createJobPost.getDescription());
					stmt.setInt(5,DateUtils.getCurrentNumDate());
					stmt.setInt(6,DateUtils.getCurrentDecTime());			
					stmt.setInt(7,createJobPost.getJob_start_num_date());
					stmt.setInt(8,createJobPost.getJob_end_num_date());
					stmt.setString(9,createJobPost.getIndustry_id());
					stmt.setString(10,createJobPost.getJob_type_id());
					stmt.setString(11, createJobPost.getHas_pre_application_data());
					stmt.setString(12,createJobPost.getPre_application_question());

					stmt.executeUpdate();

					operationResult.set_data(stmt.getString(1));			

				}
				return null;});


			operationResult.set_isSuccess(true); 
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_data(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			transaction.rollback();
		}    	    	

		return operationResult;
	}
	
	public OperationResultDto<String> insertIntoPreApplication(String pre_app_data) {
		OperationResultDto<String> operationResult = new OperationResultDto<String>();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.doReturningWork(connection -> {
				try (CallableStatement stmt = connection.prepareCall("{ call sp_insert_into_pre_application_data(?, ?) }")) {
					stmt.registerOutParameter(1, Types.VARCHAR);
					stmt.setString(2,pre_app_data);					

					stmt.executeUpdate();

					operationResult.set_data(stmt.getString(1));			

				}
				return null;});


			operationResult.set_isSuccess(true); 
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_data(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			transaction.rollback();
		}    	    	

		return operationResult;
	}

	public OperationResultDto<String> insertIntoJobApplication(ApplyToJobDto applyToJob,String pre_application_id) {
		OperationResultDto<String> operationResult = new OperationResultDto<String>();
		Transaction transaction = null;

		try {
			Session session = this._sessionFactory.openSession();
			transaction = session.beginTransaction();
			session.doReturningWork(connection -> {
				try (CallableStatement stmt = connection.prepareCall("{ call sp_insert_into_job_applications(?, ?, ?, ?, ?, ?) }")) {
					stmt.registerOutParameter(1, Types.VARCHAR);
					stmt.setString(2,applyToJob.getJobseeker_id());
					stmt.setString(3,applyToJob.getJob_post_id());
					stmt.setInt(4,DateUtils.getCurrentNumDate());
					stmt.setInt(5,DateUtils.getCurrentDecTime());							;
					stmt.setString(6,pre_application_id);

					stmt.executeUpdate();

					operationResult.set_data(stmt.getString(1));			

				}
				return null;});


			operationResult.set_isSuccess(true); 
			transaction.commit();

		} catch(Exception e) {
			operationResult.set_isSuccess(false);
			operationResult.set_data(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			transaction.rollback();
		}    	    	

		return operationResult;
	}

}
