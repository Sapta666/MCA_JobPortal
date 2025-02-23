package com.jobportal.controllers;
import com.jobportal.models.db.EmployerDetailsDto;
import com.jobportal.models.db.EmployerDetailsViewDto;
import com.jobportal.models.db.JobseekerDetailsViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;
import com.jobportal.models.function.user.FileUploadDto;
import com.jobportal.models.function.user.RegisterUserDto;
import com.jobportal.models.function.user.UpdateEmployerInfoDto;
import com.jobportal.models.function.user.UpdateJobseekerInfoDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.models.view.user.EmployerInfoDto;
import com.jobportal.models.view.user.JobseekerInfoDto;
import com.jobportal.services.UserService;
import com.jobportal.utils.HelperUtils;

@RestController()
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService _userService;

	public UserController() {
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/register")
	public ResponseDataDto<AppSettingsDto> registerUser(@RequestBody RegisterUserDto registerUser) {  	
		ResponseDataDto response = new ResponseDataDto();
		
		boolean result = this._userService.registerUser(registerUser);
		
		if(result)
			response.setStatus("Success");
		else
			response.setStatus("Failed");
		
		return response;
	}
	
	@GetMapping("/{user_id}")
	public ResponseDataDto<UserInfoDto> getUserInfo(@PathVariable(value = "user_id")String user_id) {
		ResponseDataDto<UserInfoDto> response = new ResponseDataDto<UserInfoDto>(); 				
		UserInfoDto userInfo = null;
		
		userInfo = this._userService.getUserInfo(user_id);
		response.setData(userInfo);
		
		if(response != null)	
			response.setStatus("Success");
		else
			response.setStatus("Failed");
		
		return response;				
	}

	@GetMapping("/jobseeker/list")
	public ResponseDataDto<JobseekerDetailsViewDto[]> getJobseekerList() {
		ResponseDataDto<JobseekerDetailsViewDto[]> response = new ResponseDataDto<JobseekerDetailsViewDto[]>();
		OperationResultDto<JobseekerDetailsViewDto[]> result = new OperationResultDto<JobseekerDetailsViewDto[]>();

		result = this._userService.getJobseekerList();

		if(result.get_isSuccess()) {
			response.setStatus("Success");
			response.setData(result.get_data());
		} else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}
	
	@GetMapping("/jobseeker/{user_id}")
	public ResponseDataDto<JobseekerInfoDto> getJobseekerInfo(@PathVariable(value = "user_id")String user_id) {
		ResponseDataDto<JobseekerInfoDto> response = new ResponseDataDto<JobseekerInfoDto>(); 				
		JobseekerInfoDto jobseekerInfo = null;
		
		jobseekerInfo = this._userService.getJobseekerInfo(user_id);
		response.setData(jobseekerInfo);
		
		if(response != null)	
			response.setStatus("Success");
		else
			response.setStatus("Failed");
		
		return response;				
	}

	@GetMapping("/employer/list")
	public ResponseDataDto<EmployerDetailsViewDto[]> getEmployerList() {
		ResponseDataDto<EmployerDetailsViewDto[]> response = new ResponseDataDto<EmployerDetailsViewDto[]>();
		OperationResultDto<EmployerDetailsViewDto[]> result = new OperationResultDto<EmployerDetailsViewDto[]>();

		result = this._userService.getEmployerList();

		if(result.get_isSuccess()) {
			response.setStatus("Success");
			response.setData(result.get_data());
		} else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}
	
	@GetMapping("/employer/{user_id}")
	public ResponseDataDto<EmployerInfoDto> getEmployerInfo(@PathVariable(value = "user_id")String user_id) {
		ResponseDataDto<EmployerInfoDto> response = new ResponseDataDto<EmployerInfoDto>(); 				
		EmployerInfoDto employerInfo = null;
		
		employerInfo = this._userService.getEmployerInfo(user_id);
		response.setData(employerInfo);
		
		if(employerInfo != null) {
			response.setStatus("Success");
			response.setData(employerInfo);
		} else
			response.setStatus("Failed");
		
		return response;				
	}

	@PutMapping("/jobseeker")
	public ResponseDataDto<AppSettingsDto> updateJobseekerInfo(@RequestBody UpdateJobseekerInfoDto updateJobseekerInfo) {  	
		ResponseDataDto response = new ResponseDataDto();
		OperationResultDto result = new OperationResultDto();
		
		result = this._userService.updateJobseekerInfo(updateJobseekerInfo);
		
		if(result.get_isSuccess())
			response.setStatus("Success");
		else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}
		
		return response;
	}
	
	@PutMapping("/employer")
	public ResponseDataDto<AppSettingsDto> updateEmployerInfo(@RequestBody UpdateEmployerInfoDto updateEmployerInfo) {  	
		ResponseDataDto response = new ResponseDataDto();
		OperationResultDto result = new OperationResultDto();
		
		result = this._userService.updateEmployerInfo(updateEmployerInfo);
		
		if(result.get_isSuccess())
			response.setStatus("Success");
		else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}
		
		return response;
	}
	
	@PostMapping("/upload/resume")
	public BasicResponseDto uploadResume(@RequestBody FileUploadDto fileUpload) {  	
		ResponseDataDto response = new ResponseDataDto();
		OperationResultDto result = null;
		
		result = this._userService.storeUserResume(fileUpload);		
		
		if(result.get_isSuccess())
			response.setStatus("Success");
		else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}
		
		response.setStatus("Success");
		
		return response;
	}
	
	@GetMapping("/get/resume/base64/{user_id}")
	public BasicResponseDto getUserResume(@PathVariable(value = "user_id") String user_id) {  	
		ResponseDataDto response = new ResponseDataDto();
		OperationResultDto result = null;
		
		result = this._userService.getUserResume(user_id);		
		
		if(result.get_isSuccess()) {
			response.setStatus("Success");
			response.setData(result.get_data());
		} else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}
		
		response.setStatus("Success");
		
		return response;
	}
	
}
