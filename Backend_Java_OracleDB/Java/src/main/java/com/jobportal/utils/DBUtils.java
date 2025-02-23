package com.jobportal.utils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Component;

@Component
@EntityScan(value = "com.jobportal.models")
public class DBUtils {
	
	//region Variables
	
	private String _configFile = "hibernate.cfg.xml";
	private Configuration _con = null;
	private SessionFactory _sessionFactory = null;
	
	//endregion 
	
	public DBUtils() {
		configureHibernate();
		System.out.println("DB Utils object created");
	}
	
	private void configureHibernate() {
		try {
			String userDirectory = System.getProperty("user.dir");
			this._con = new Configuration().configure("hibernate.cfg.xml");
			this._sessionFactory = this._con.buildSessionFactory();
		} catch (Exception e) {
			_con = null;
			System.out.println("Failed to configure hibernate");
			e.printStackTrace();
		}
	}
	
	public SessionFactory getSessionFactory() {		
		return this._sessionFactory;
	}

}
