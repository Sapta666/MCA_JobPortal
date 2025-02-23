package com.jobportal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.auth.AuthCredDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.services.dao.UserDaoService;

@Service
public class AuthService {
	
	@Autowired private UserDaoService _userDaoService;
	@Autowired private AppSettingsService _appSettingsService;
	
	public AuthService() {
		
	}	
	
	public OperationResultDto<AppSettingsDto> validateLogin(AuthCredDto authCred) {		
		OperationResultDto result = new OperationResultDto<AppSettingsDto>();
		UserInfoDto userInfo = this._userDaoService.getUserInfoBasedOnName(authCred.getUsername());
		
		if(userInfo == null)
			return result;
		if(authCred.getUsername().equals(userInfo.getUser_name()) && authCred.getPassword().equals(userInfo.getPassword())) {
			result.set_isSuccess(true);
			result.set_data(this._appSettingsService.getAppSettingsData(userInfo.getUser_id()));
		}
					
			return result;
	}

}
