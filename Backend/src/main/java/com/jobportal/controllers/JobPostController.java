package com.jobportal.controllers;

import com.jobportal.models.db.JobseekerApplicationViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jobportal.models.db.JobPostDto;
import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;
import com.jobportal.models.function.auth.AuthCredDto;
import com.jobportal.models.function.jobposts.ApplyToJobDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.models.function.jobposts.SearchJobDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.services.AuthService;
import com.jobportal.services.JobPostsService;

@RestController
@RequestMapping(value = "/jobPosts")
public class JobPostController {

	@Autowired
	private JobPostsService jobPostsService;

	@PostMapping(value = "/postJob")
	public BasicResponseDto postJob(@RequestBody CreateJobPostDto createJobPost) {
		BasicResponseDto response = new BasicResponseDto();
		OperationResultDto<String> result = jobPostsService.createJobPost(createJobPost); 

		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		if(!result.get_isSuccess())
			response.setMessage(result.get_data());

		return response;
	}

	@PostMapping(value = "/search")
	public ResponseDataDto<JobPostDto[]> searchJob(@RequestBody SearchJobDto searchJob) {
		ResponseDataDto<JobPostDto[]> response = new ResponseDataDto<JobPostDto[]>();
		OperationResultDto<JobPostDto[]> result = jobPostsService.searchJobPosts(searchJob); 

		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		if(!result.get_isSuccess())
			response.setMessage(result.get_message());
		else
			response.setData(result.get_data());

		return response;	
	} 

	@GetMapping(value = "/{job_post_id}")
	public ResponseDataDto<JobPostDto> getJobPostInfo(@PathVariable("job_post_id") String job_post_id) {
		ResponseDataDto<JobPostDto> response = new ResponseDataDto<JobPostDto>();
		OperationResultDto<JobPostDto> result = jobPostsService.getJobPostInfo(job_post_id); 

		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		if(!result.get_isSuccess())
			response.setMessage(result.get_message());
		else	
			response.setData(result.get_data());

		return response;

	}
	
	@PostMapping(value = "/apply")
	public BasicResponseDto applyToJob(@RequestBody ApplyToJobDto applyToJob) {
		BasicResponseDto response = new BasicResponseDto();
		OperationResultDto result = jobPostsService.applyToJob(applyToJob); 

		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		if(!result.get_isSuccess())
			response.setMessage(result.get_message());

		return response;

	}

	@GetMapping(value = "/jobApplications/search")
	public ResponseDataDto<JobseekerApplicationViewDto[]> searchJobApplications(@RequestParam String jobseeker_id) {
		ResponseDataDto<JobseekerApplicationViewDto[]> response = new ResponseDataDto<JobseekerApplicationViewDto[]>();
		OperationResultDto<JobseekerApplicationViewDto[]> result = jobPostsService.searchJobApplication(jobseeker_id);

		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		if(!result.get_isSuccess())
			response.setMessage(result.get_message());
		else
			response.setData(result.get_data());

		return response;

	}

}
