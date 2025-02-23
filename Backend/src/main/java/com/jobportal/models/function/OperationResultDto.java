package com.jobportal.models.function;

public class OperationResultDto<T> {
	
	private Boolean _isSuccess = false;
	private T _data;
	private String _message;

	public OperationResultDto() {
		// TODO Auto-generated constructor stub
	}

	public Boolean get_isSuccess() {
		return _isSuccess;
	}

	public void set_isSuccess(Boolean _isSuccess) {
		this._isSuccess = _isSuccess;
	}

	public T get_data() {
		return _data;
	}

	public void set_data(T _data) {
		this._data = _data;
	}

	public String get_message() {
		return _message;
	}

	public void set_message(String _message) {
		this._message = _message;
	}
	
}
