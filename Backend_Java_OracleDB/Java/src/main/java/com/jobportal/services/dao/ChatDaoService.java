package com.jobportal.services.dao;

import com.jobportal.models.db.ChatHistoryDto;
import com.jobportal.models.db.UserInfoDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.chat.CreateNewChatDto;
import com.jobportal.models.function.chat.SearchChatHistoryDto;
import com.jobportal.models.function.helpticket.CreateHelpTicketDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatDaoService {

    private SessionFactory _sessionFactory = null;

    @Autowired
    private StoredProceduresChatService _storedProceduresChatService;

    @Autowired
    public ChatDaoService(DBUtils dbUtils) {
        this._sessionFactory = dbUtils.getSessionFactory();
    }

    public OperationResultDto<String> createNewChatCumHistory(CreateNewChatDto createNewChat) {
        OperationResultDto<String> operationResult = null;

        operationResult = this._storedProceduresChatService.insertIntoChatInfoCumHistory(createNewChat);

        return operationResult;
    }

    public OperationResultDto<ChatHistoryDto[]> getChatHistoryList(SearchChatHistoryDto searchChatHistory) {
        OperationResultDto<ChatHistoryDto[]> result = new OperationResultDto<ChatHistoryDto[]>();

        try (Session session = this._sessionFactory.openSession()) {

            String hqlQuery = "from ChatHistoryDto where user_id = :employer_user_id or user_id = :jobseeker_user_id";

            Query<ChatHistoryDto> query = session.createQuery(hqlQuery,ChatHistoryDto.class);
            query = query.setParameter("employer_user_id",searchChatHistory.getEmployer_user_id());
            query = query.setParameter("jobseeker_user_id",searchChatHistory.getJobseeker_user_id());

            List<ChatHistoryDto> chatHistoryList = query.list();

            result.set_isSuccess(true);
            result.set_data(chatHistoryList.toArray(new ChatHistoryDto[0]));

        } catch (Exception e) {
            result.set_isSuccess(false);
            result.set_message(HelperUtils.convertStackTraceToString(e));
            e.printStackTrace();
        }

        return result;
    }

}
