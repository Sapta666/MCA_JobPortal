package com.jobportal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.enums.UserTypeEnum;
import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.services.dao.UserDaoService;

@Service
public class AppSettingsService {

	@Autowired
	private UserDaoService _userDaoService;

	public AppSettingsService() {
		// TODO Auto-generated constructor stub
	}

	public AppSettingsDto getAppSettingsData(String user_id) {
		AppSettingsDto appSettings = new AppSettingsDto();

		// service implementation for creating appSettings object
		UserInfoDto userInfo = this._userDaoService.getUserInfoBasedOnUser_ID(user_id);
		if (userInfo == null)
			return null;
		else if (userInfo.getUser_type().equals(UserTypeEnum.EMPLOYER.toString()))
			appSettings.setEmployer_id(this._userDaoService.getEmployerInfoBasedOnUser_ID(user_id).getEmployer_id());
		else if (userInfo.getUser_type().equals(UserTypeEnum.JOBSEEKER.toString()))
			appSettings.setJobseeker_id(this._userDaoService.getJobseekerInfoBasedOnUser_ID(user_id).getJobseeker_id());

		appSettings.setUser_id(userInfo.getUser_id());
		appSettings.setUser_type(userInfo.getUser_type());
		appSettings.setUser_name(userInfo.getUser_name());
		appSettings.setF_name(userInfo.getF_name());
		appSettings.setL_name(userInfo.getL_name());

		return appSettings;
	}

}
