package com.jobportal.services;

import com.jobportal.models.db.JobseekerApplicationViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.db.JobPostDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.jobposts.ApplyToJobDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.models.function.jobposts.SearchJobDto;
import com.jobportal.services.dao.JobPostDaoService;

@Service
public class JobPostsService {
	
	@Autowired private JobPostDaoService _jobPostDaoService;

	public JobPostsService() {
		// TODO Auto-generated constructor stub
	}
	
	public OperationResultDto<String> createJobPost(CreateJobPostDto createJobPost) {
			OperationResultDto<String> result;
			result = this._jobPostDaoService.createJobPost(createJobPost);
			
			return result;
	}
	
	public OperationResultDto<JobPostDto[]> searchJobPosts(SearchJobDto searchJob) {
		OperationResultDto<JobPostDto[]> result;
		
		result = this._jobPostDaoService.getJobList(searchJob);
		
		return result;		
	}
	
	public OperationResultDto<JobPostDto> getJobPostInfo(String job_post_id) {
		OperationResultDto<JobPostDto> result;
		
		result = this._jobPostDaoService.getJobPostInfo(job_post_id);
		
		return result;		
	}	
	
	public OperationResultDto applyToJob(ApplyToJobDto applyToJob) {
		OperationResultDto result;
		
		result = this._jobPostDaoService.createJobApplication(applyToJob);
		
		return result;		
	}

	public OperationResultDto<JobseekerApplicationViewDto[]> searchJobApplication(String jobseeker_id) {
		OperationResultDto result;

		result = this._jobPostDaoService.getJobApplicationsForUser(jobseeker_id);

		return result;
	}

}
