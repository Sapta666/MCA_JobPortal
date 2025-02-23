package com.jobportal.utils;

import java.io.PrintWriter;
import java.io.StringWriter;

public class HelperUtils {

	private HelperUtils() {
		
	}
	
	public static String convertStackTraceToString(Exception e) {
		 StringWriter sw = new StringWriter();
         PrintWriter pw = new PrintWriter(sw);
         e.printStackTrace(pw);       
         
         return sw.toString();
	}
	
	public static String getStoredProcedureParamString(int paramNum) {
		String paramString = "";
		
		for(int a = 1;a<=paramNum; a++)
			paramString += (a != paramNum ? "?, " : "?");
	
		System.out.println(paramString);
		
		return paramString;
	}
	
	public static String getApplicationDirectory() {
		String servletContext = "";
			
		servletContext = System.getProperty("user.dir");
		
		return servletContext;
	}
	
	public static String getResumeUploadDirectory() {
		String uploadDir = System.getProperty("user.dir") + "/file_storage/user_resume";
		
		return uploadDir;
	}

}
