package com.jobportal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;
import com.jobportal.models.function.auth.AuthCredDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.services.AuthService;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	@PostMapping(value = "/login")
	public ResponseDataDto<AppSettingsDto> login(@RequestBody AuthCredDto authCred) {
		ResponseDataDto response = new ResponseDataDto<AppSettingsDto>();
		OperationResultDto<AppSettingsDto> result = authService.validateLogin(authCred); 
		
		response.setStatus(result.get_isSuccess() ? "Success" : "Failed");
		response.setData(result.get_data());								
		
		return response;
	}

}
