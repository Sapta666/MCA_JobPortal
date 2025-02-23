package com.jobportal.models.function;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseDataDto<T> extends BasicResponseDto {
	
	@JsonProperty(value = "Data")
	private T data;

	public ResponseDataDto() {
		// TODO Auto-generated constructor stub
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
