package com.jobportal.services.dao;

import com.jobportal.utils.DBUtils;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoredProceduresReportsService {

    private SessionFactory _sessionFactory = null;

    @Autowired
    public StoredProceduresReportsService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

}
