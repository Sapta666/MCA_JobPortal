package com.jobportal.services.dao;

import com.jobportal.models.function.helpticket.CreateHelpTicketDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;
import jakarta.persistence.ParameterMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoredProceduresHelpTicketService {

    private SessionFactory _sessionFactory = null;

    @Autowired
    public StoredProceduresHelpTicketService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

    public OperationResultDto<String> insertIntoHelpTicket(CreateHelpTicketDto createHelpTicket) {
        OperationResultDto<String> operationResult = new OperationResultDto<String>();
        Transaction transaction = null;

        try {
            Session session = this._sessionFactory.openSession();
            transaction = session.beginTransaction();

            ProcedureCall procedureCall = session.createStoredProcedureCall("sp_insert_into_hlp_tkt_details");

            procedureCall.registerStoredProcedureParameter("p_HLP_TKT_ID", String.class, ParameterMode.OUT);
            procedureCall.registerStoredProcedureParameter("p_MESSAGE", String.class, ParameterMode.IN).setParameter("p_MESSAGE",createHelpTicket.getHelp_ticket_message());
            procedureCall.registerStoredProcedureParameter("p_TOPIC_ID", String.class, ParameterMode.IN).setParameter("p_TOPIC_ID",createHelpTicket.getTopic_id());
            procedureCall.registerStoredProcedureParameter("p_USER_ID", String.class, ParameterMode.IN).setParameter("p_USER_ID",createHelpTicket.getUser_id());
            procedureCall.registerStoredProcedureParameter("p_RPLY_ADMIN_ID", String.class, ParameterMode.IN).setParameter("p_RPLY_ADMIN_ID", "");
            procedureCall.registerStoredProcedureParameter("p_RPLY_MESSAGE", String.class, ParameterMode.IN).setParameter("p_RPLY_MESSAGE","");

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
