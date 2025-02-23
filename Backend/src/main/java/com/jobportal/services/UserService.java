package com.jobportal.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;

import com.jobportal.models.db.EmployerDetailsDto;
import com.jobportal.models.db.EmployerDetailsViewDto;
import com.jobportal.models.db.JobseekerDetailsViewDto;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.enums.UserTypeEnum;
import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.user.FileUploadDto;
import com.jobportal.models.function.user.RegisterUserDto;
import com.jobportal.models.function.user.UpdateEmployerInfoDto;
import com.jobportal.models.function.user.UpdateJobseekerInfoDto;
import com.jobportal.models.view.user.EmployerInfoDto;
import com.jobportal.models.view.user.JobseekerInfoDto;
import com.jobportal.services.dao.StoredProceduresAuthService;
import com.jobportal.services.dao.UserDaoService;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;

import jakarta.persistence.StoredProcedureQuery;

@Service
public class UserService {

	@Autowired UserDaoService userDaoService;
	@Autowired StoredProceduresAuthService storedProceduresDaoService;

	//	for registering user Jobseeker/Employee
	public boolean registerUser(RegisterUserDto registerUser) {    	
		OperationResultDto<String> operationResult = null;
		try {
			//for storing data in userInfo table
			operationResult = this.storedProceduresDaoService.insertIntoUserInfo(registerUser.getUserInfo());
			//    		storedProceduresDaoService.test(registerUser.getUserInfo());

			if(registerUser.getUserInfo().getUser_type().equals(UserTypeEnum.JOBSEEKER.name())) {
				registerUser.getJobseekerDetails().setUser_id(operationResult.get_data());
				this.storedProceduresDaoService.insertJobseekerDetails(registerUser.getJobseekerDetails());
			} else if(registerUser.getUserInfo().getUser_type().equals(UserTypeEnum.EMPLOYER.name())) {
				registerUser.getEmployerDetails().setUser_id(operationResult.get_data());
				this.storedProceduresDaoService.insertEmployerDetails(registerUser.getEmployerDetails());
			}

		} catch(Exception e) {
			return false;
		} 

		return true;
	}      

	//  for getting user info based on given user_id
	public UserInfoDto getUserInfo(String user_id) {
		UserInfoDto userInfo = null;

		userInfo = this.userDaoService.getUserInfoBasedOnUser_ID(user_id);

		return userInfo;
	}

	//  for getting jobseeker info based on given user_id
	public JobseekerInfoDto getJobseekerInfo(String user_id) {
		JobseekerInfoDto jobseekerInfo = new JobseekerInfoDto();

		jobseekerInfo.setUserInfo(this.userDaoService.getUserInfoBasedOnUser_ID(user_id));
		jobseekerInfo.setJobseekerDetails(this.userDaoService.getJobseekerInfoBasedOnUser_ID(user_id));

		return jobseekerInfo;
	}

	//  for getting employer list
	public OperationResultDto<EmployerDetailsViewDto[]> getEmployerList() {
		OperationResultDto<EmployerDetailsViewDto[]> result = null;

		result = this.userDaoService.getEmployerList();

		return result;
	}

	//  for getting jobseeker list
	public OperationResultDto<JobseekerDetailsViewDto[]> getJobseekerList() {
		OperationResultDto<JobseekerDetailsViewDto[]> result = null;

		result = this.userDaoService.getJobseekerDetailsViewList();

		return result;
	}

	//  for getting employer info based on given user_id
	public EmployerInfoDto getEmployerInfo(String user_id) {
		EmployerInfoDto employerInfo = new EmployerInfoDto();

		employerInfo.setUserInfo(this.userDaoService.getUserInfoBasedOnUser_ID(user_id));
		employerInfo.setEmployerDetails(this.userDaoService.getEmployerInfoBasedOnUser_ID(user_id));

		return employerInfo;
	}

	//  for updating jobseeker info 
	public OperationResultDto updateJobseekerInfo(UpdateJobseekerInfoDto updateJobseekerInfo) {
		OperationResultDto result = new OperationResultDto();
		OperationResultDto updateUserInfoResult = new OperationResultDto();
		OperationResultDto updateJobseekerInfoResult = new OperationResultDto();

		result.set_isSuccess(true);
		updateUserInfoResult = this.userDaoService.updateUserInfo(updateJobseekerInfo.getUserInfo());
		if(updateUserInfoResult.get_isSuccess()) {
			updateJobseekerInfoResult = this.userDaoService.updateJobseekerInfo(updateJobseekerInfo.getJobseekerDetails());
			if(!updateJobseekerInfoResult.get_isSuccess()) {
				result.set_isSuccess(false);
				result.set_message(updateJobseekerInfoResult.get_message());
			}
		} else {
			result.set_isSuccess(false);
			result.set_message(updateUserInfoResult.get_message());
		}

		return result;
	}

	//  for updating jobseeker info 
	public OperationResultDto updateEmployerInfo(UpdateEmployerInfoDto updateEmployerInfo) {
		OperationResultDto result = new OperationResultDto();
		OperationResultDto updateUserInfoResult = new OperationResultDto();
		OperationResultDto updateEmployerInfoResult = new OperationResultDto();

		result.set_isSuccess(true);
		updateUserInfoResult = this.userDaoService.updateUserInfo(updateEmployerInfo.getUserInfo());
		if(updateUserInfoResult.get_isSuccess()) {
			updateEmployerInfoResult = this.userDaoService.updateEmployerInfo(updateEmployerInfo.getEmployerDetails());
			if(!updateEmployerInfoResult.get_isSuccess()) {
				result.set_isSuccess(false);
				result.set_message(updateEmployerInfoResult.get_message());
			}
		} else {
			result.set_isSuccess(false);
			result.set_message(updateUserInfoResult.get_message());
		}

		return result;
	}

	// for storing and updating the user resume
	public OperationResultDto storeUserResume(FileUploadDto fileUpload) {
		OperationResultDto result = new OperationResultDto();		
		result.set_isSuccess(true);

		File file = new File(HelperUtils.getResumeUploadDirectory()+"/"+fileUpload.getUser_id()+"_resume."+fileUpload.getExtension());
		byte[] decodedBytes = Base64.getDecoder().decode(fileUpload.getBase64());

		if(file.exists()) {
			if(file.delete()) {
				try {
					if(!file.createNewFile())
						result.set_isSuccess(false);	
					else {
						FileOutputStream fos = new FileOutputStream(file);
						fos.write(decodedBytes);
						fos.close();	
					}
				} catch (Exception e) {
					result.set_message(HelperUtils.convertStackTraceToString(e));
					result.set_isSuccess(false);			
				}			
			} else 
				result.set_isSuccess(false);
		} else {
			try {
				if(!file.createNewFile())
					result.set_isSuccess(false);	
				else {
					FileOutputStream fos = new FileOutputStream(file);
					fos.write(decodedBytes);
					fos.close();	
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}


		return result;
	}

	public OperationResultDto getUserResume(String user_id) {
		OperationResultDto<String> result = new OperationResultDto<String>();
		result.set_isSuccess(true);
		
		File file = new File(HelperUtils.getResumeUploadDirectory()+"/"+user_id+"_resume.pdf");

		if(file.exists()) {
			try {
				byte[] fileContent = Files.readAllBytes(file.toPath());
				result.set_data(Base64.getEncoder().encodeToString(fileContent));
			} catch (Exception e) {
				result.set_isSuccess(false);
				result.set_message(HelperUtils.convertStackTraceToString(e));
			}		
		}

		return result;
	}

}

