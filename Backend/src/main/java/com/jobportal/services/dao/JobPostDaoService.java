package com.jobportal.services.dao;

import java.util.List;

import com.jobportal.models.db.HelpTicketForListDto;
import com.jobportal.models.db.JobseekerApplicationViewDto;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.db.JobPostDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.jobposts.ApplyToJobDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.models.function.jobposts.SearchJobDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;

@Service
public class JobPostDaoService {
	
	private SessionFactory _sessionFactory = null;
	
	@Autowired private StoredProceduresJobPostsService _storedProceduresJobPostsService;

	@Autowired
	public JobPostDaoService(DBUtils dbUtils) {
		this._sessionFactory = dbUtils.getSessionFactory();
	}
	
	public OperationResultDto<String> createJobPost(CreateJobPostDto createJobPost) {
		OperationResultDto<String> operationResult = null;
		
		operationResult = this._storedProceduresJobPostsService.insertJobPosts(createJobPost);
		
		return operationResult;		
	}
	
	public OperationResultDto<JobPostDto[]> getJobList(SearchJobDto searchJob) {
		OperationResultDto<JobPostDto[]> result = new OperationResultDto<JobPostDto[]>();
			
		try (Session session = this._sessionFactory.openSession()){
			boolean hasTopicSearch = false;
			boolean hasDescriptionSearch = false;
			boolean hasJobTypeIdSearch = false;
			boolean hasIndustryIdSearch = false;
			boolean hasJobStartNumDateSearch = false;
			boolean hasJobEndNumDateSearch = false;
			boolean hasEmployerUserIdSearch = false;
			
			String sqlString = "from JobPostDto";
			if(!searchJob.getTopic().trim().equals("")) {
				sqlString += "where topic like :topic";				
				hasTopicSearch = true;				
			}
			if(!searchJob.getDescription().trim().equals("")) {
				sqlString += (hasTopicSearch ? " and ": " ") + "where description like :description";
				hasDescriptionSearch = true;
			}
			if(!searchJob.getJob_type_id().trim().equals("")) {
				sqlString += (hasDescriptionSearch ? " and " : " ")+"where job_type_id = :job_type_id";
				hasJobTypeIdSearch = true;
			}
			if(!searchJob.getIndustry_id().trim().equals("")) {
				sqlString += (hasJobTypeIdSearch? " and ": " ") + "where industry_id like :industry_id";
				hasIndustryIdSearch = true;
			}
			if(searchJob.getJob_start_num_date() > 0) {
				sqlString += (hasIndustryIdSearch ? " and ": " ") + "where job_start_num_date >= :job_start_num_date";
				hasJobStartNumDateSearch = true;
			}
			if(searchJob.getJob_end_num_date() > 0) {
				sqlString += (hasJobStartNumDateSearch ? " and ": " ") + "where job_end_num_date <= :job_end_num_date";
				hasJobEndNumDateSearch = true;
			}
			if(!searchJob.getEmployer_id().trim().equals("")) {
				sqlString += (hasJobTypeIdSearch? " and ": " ") + "where employer_id like :employer_id";
				hasEmployerUserIdSearch = true;
			}
									
			System.out.println(sqlString);
			Query<JobPostDto> query = session.createQuery(sqlString,JobPostDto.class);		
			
			if(hasTopicSearch)
				query.setParameter("topic", searchJob.getTopic());
			if(hasDescriptionSearch)
				query.setParameter("description", searchJob.getDescription());
			if(hasJobTypeIdSearch)
				query.setParameter("job_type_id", searchJob.getJob_type_id());
			if(hasIndustryIdSearch)
				query.setParameter("industry_id", searchJob.getIndustry_id());
			if(hasJobStartNumDateSearch)
				query.setParameter("job_start_num_date", searchJob.getJob_start_num_date());
			if(hasJobEndNumDateSearch)
				query.setParameter("job_end_num_date", searchJob.getJob_end_num_date());
			if(hasEmployerUserIdSearch)
				query.setParameter("employer_id", searchJob.getEmployer_id());
			
			
			List<JobPostDto> list = query.getResultList();
			result.set_data(list.toArray(new JobPostDto[list.size()]));
			result.set_isSuccess(true);
			
		} catch(Exception e) {
			e.printStackTrace();
			result.set_message(HelperUtils.convertStackTraceToString(e));
		}
		
		return result;		
	}
	
	public OperationResultDto<JobPostDto> getJobPostInfo(String job_post_id) {
		OperationResultDto<JobPostDto> result = new OperationResultDto<JobPostDto>();
		
		try(Session session = this._sessionFactory.openSession()) {
			JobPostDto jobPost = null;
			
			Transaction transaction = session.beginTransaction();
			jobPost = session.get(JobPostDto.class, job_post_id);
			transaction.commit();
			
			result.set_data(jobPost);
			result.set_isSuccess(true);
			
		} catch(Exception e) {
			e.printStackTrace();
			result.set_message(HelperUtils.convertStackTraceToString(e));
		}
		
		return result;
	}
	
	public OperationResultDto createJobApplication(ApplyToJobDto applyToJob) {
		OperationResultDto<String> preApplicationResult = new OperationResultDto<String>();
		OperationResultDto jobApplicationResult = new OperationResultDto();
		String pre_application_id = "";
		
		
		try(Session session = this._sessionFactory.openSession()) {
			
			Transaction transaction = session.beginTransaction();
			JobPostDto jobPost = session.get(JobPostDto.class, applyToJob.getJob_post_id());
			
			if(applyToJob.getPre_application_data().length() != 0 && jobPost.getHas_pre_application_data().equals("Y"))
				pre_application_id = this._storedProceduresJobPostsService.insertIntoPreApplication(applyToJob.getPre_application_data()).get_data();
				
			jobApplicationResult = this._storedProceduresJobPostsService.insertIntoJobApplication(applyToJob,pre_application_id);
			
			jobApplicationResult.set_isSuccess(true);
			
		} catch(Exception e) {
			e.printStackTrace();
			jobApplicationResult.set_message(HelperUtils.convertStackTraceToString(e));
		}
		
		return jobApplicationResult;		
	}

	public OperationResultDto<JobseekerApplicationViewDto[]> getJobApplicationsForUser(String jobseeker_id) {
		OperationResultDto<JobseekerApplicationViewDto[]> result = new OperationResultDto<JobseekerApplicationViewDto[]>();
		Transaction transaction = null;
		try (Session session = _sessionFactory.openSession()) {
			transaction = session.beginTransaction();
			boolean userFilterActive = false;
			String sqlString = "from JobseekerApplicationViewDto";
			if(jobseeker_id != null && jobseeker_id.length() > 0) {
				sqlString += "\twhere jobseeker_id = :jobseeker_id";
				userFilterActive = true;
			}
			Query<JobseekerApplicationViewDto> query = session.createQuery(sqlString,JobseekerApplicationViewDto.class);

			if(userFilterActive)
				query.setParameter("jobseeker_id",jobseeker_id);

			List<JobseekerApplicationViewDto> resultSet = query.list();

			result.set_isSuccess(true);
			result.set_data(resultSet.toArray(new JobseekerApplicationViewDto[0]));
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
