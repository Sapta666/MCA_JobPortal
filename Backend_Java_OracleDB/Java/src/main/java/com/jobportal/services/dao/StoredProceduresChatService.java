package com.jobportal.services.dao;

import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.chat.CreateNewChatDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.DateUtils;
import com.jobportal.utils.HelperUtils;
import jakarta.persistence.ParameterMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoredProceduresChatService {

    private SessionFactory _sessionFactory = null;

    @Autowired
    public StoredProceduresChatService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

    public OperationResultDto<String> insertIntoChatInfoCumHistory(CreateNewChatDto createNewChat) {
        OperationResultDto<String> operationResult = new OperationResultDto<String>();
        Transaction transaction = null;

        try {
            Session session = this._sessionFactory.openSession();
            transaction = session.beginTransaction();

            ProcedureCall procedureCall = session.createStoredProcedureCall("sp_insert_into_chat_info_cum_chat_history");

            procedureCall.registerStoredProcedureParameter("p_CHAT_ID", String.class, ParameterMode.OUT);
            procedureCall.registerStoredProcedureParameter("p_MESSAGE", String.class, ParameterMode.IN).setParameter("p_MESSAGE",createNewChat.getMessage());
            procedureCall.registerStoredProcedureParameter("p_MESSAGE_NUM_DATE", String.class, ParameterMode.IN).setParameter("p_MESSAGE_NUM_DATE", DateUtils.getCurrentNumDate());
            procedureCall.registerStoredProcedureParameter("p_MESSAGE_DEC_TIME", String.class, ParameterMode.IN).setParameter("p_MESSAGE_DEC_TIME",DateUtils.getCurrentDecTime());
            procedureCall.registerStoredProcedureParameter("p_EMPLOYER_ID", String.class, ParameterMode.IN).setParameter("p_EMPLOYER_ID",createNewChat.getEmployer_id());
            procedureCall.registerStoredProcedureParameter("p_JOBSEEKER_ID", String.class, ParameterMode.IN).setParameter("p_JOBSEEKER_ID",createNewChat.getJobseeker_id());
            procedureCall.registerStoredProcedureParameter("p_USER_ID", String.class, ParameterMode.IN).setParameter("p_USER_ID",createNewChat.getUser_id());

            procedureCall.execute();

            operationResult.set_isSuccess(true);
            transaction.commit();

        } catch(Exception e) {
            operationResult.set_isSuccess(false);
            operationResult.set_data(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            transaction.rollback();
        }

        return operationResult;
    }

}
