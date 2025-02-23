package com.jobportal.services.dao;

import com.jobportal.models.function.helpticket.CreateHelpTicketDto;
import com.jobportal.models.db.HelpTicketDetailsDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.db.HelpTicketForListDto;
import com.jobportal.models.function.helpticket.HelpTicketReplyDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HelpTicketDaoService {

    private SessionFactory _sessionFactory = null;

    @Autowired private StoredProceduresHelpTicketService _storedProceduresHelpTicketService;

    @Autowired
    public HelpTicketDaoService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

    public OperationResultDto<String> insertIntoHelpTicket(CreateHelpTicketDto createHelpTicket) {
        OperationResultDto<String> operationResult = null;

        operationResult = this._storedProceduresHelpTicketService.insertIntoHelpTicket(createHelpTicket);

        return operationResult;
    }

    public OperationResultDto<HelpTicketForListDto[]> getHelpTicketList(String user_id) {
        OperationResultDto<HelpTicketForListDto[]> result = new OperationResultDto<HelpTicketForListDto[]>();
        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();
            boolean userFilterActive = false;
            String sqlString = "from HelpTicketForListDto";
            if(user_id != null && user_id.length() > 0) {
                sqlString += "\twhere user_id = :user_id";
                userFilterActive = true;
            }
            Query<HelpTicketForListDto> query = session.createQuery(sqlString,HelpTicketForListDto.class);

            if(userFilterActive)
                query.setParameter("user_id",user_id);

            List<HelpTicketForListDto> resultSet = query.list();

            result.set_isSuccess(true);
            result.set_data(resultSet.toArray(new HelpTicketForListDto[0]));
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

    public OperationResultDto<HelpTicketDetailsDto> getHelpTicketInfo(String hlp_tkt_id) {
        OperationResultDto<HelpTicketDetailsDto> result = new OperationResultDto<HelpTicketDetailsDto>();
        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();
            boolean userFilterActive = false;
            String sqlString = "from HelpTicketDetailsDto where hlp_tkt_id = :hlp_tkt_id";

            Query<HelpTicketDetailsDto> query = session.createQuery(sqlString,HelpTicketDetailsDto.class);

            query.setParameter("hlp_tkt_id",hlp_tkt_id);

            HelpTicketDetailsDto resultSet = query.uniqueResult();

            result.set_isSuccess(true);
            result.set_data(resultSet);
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

    public OperationResultDto<HelpTicketDetailsDto> updateHelpTicketWithReply(String hlp_tkt_id, HelpTicketReplyDto helpTicketReply) {
        OperationResultDto<HelpTicketDetailsDto> result = new OperationResultDto<HelpTicketDetailsDto>();
        Transaction transaction = null;
        try (Session session = _sessionFactory.openSession()) {
            transaction = session.beginTransaction();
            String sqlStringForInfo = "from HelpTicketDetailsDto where hlp_tkt_id = :hlp_tkt_id";

            Query<HelpTicketDetailsDto> query = session.createQuery(sqlStringForInfo,HelpTicketDetailsDto.class);
            query.setParameter("hlp_tkt_id",hlp_tkt_id);

            HelpTicketDetailsDto resultSet = query.uniqueResult();

            resultSet.setRply_message(helpTicketReply.getMessage());
            resultSet.setRply_admin_id(helpTicketReply.getReply_admin_id());

            session.merge(resultSet);

            result.set_isSuccess(true);
            result.set_data(resultSet);
            transaction.commit();
        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
            if(transaction != null)
                transaction.rollback();
        }

        return result;
    }

}
