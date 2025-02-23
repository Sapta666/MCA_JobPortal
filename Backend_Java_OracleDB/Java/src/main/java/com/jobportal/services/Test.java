package com.jobportal.services;

import java.sql.CallableStatement;
import java.sql.Types;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.springframework.beans.factory.annotation.Autowired;

import com.jobportal.enums.UserTypeEnum;
import com.jobportal.utils.DBUtils;

import jakarta.persistence.ParameterMode;

public class Test {

	private static SessionFactory _sessionFactory = null;	

	public Test(DBUtils dbUtils) {
	}

	public static void main(String[] args) {
		Transaction transaction = null;
		_sessionFactory= new DBUtils().getSessionFactory();
		try {
			Session session = _sessionFactory.openSession();
			transaction = session.beginTransaction();
			ProcedureCall procedureCall = session.createStoredProcedureCall("sp_insert_testing");

			procedureCall.registerParameter("user_type", String.class, ParameterMode.IN);
			procedureCall.registerParameter("isCorrect", String.class, ParameterMode.OUT);
			
			procedureCall.setParameter("user_type", UserTypeEnum.ADMIN.toString());

			// Execute the stored procedure
			procedureCall.executeUpdate();
			transaction.commit();

		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
