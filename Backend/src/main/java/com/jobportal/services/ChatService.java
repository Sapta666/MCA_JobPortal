package com.jobportal.services;

import com.jobportal.models.db.ChatHistoryDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.chat.CreateNewChatDto;
import com.jobportal.models.function.chat.SearchChatHistoryDto;
import com.jobportal.models.function.jobposts.CreateJobPostDto;
import com.jobportal.services.dao.ChatDaoService;
import com.jobportal.services.dao.UserDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    @Autowired
    ChatDaoService _chatDaoService;

    public ChatService(ChatDaoService chatDaoService) {
        this._chatDaoService = chatDaoService;
    }

    public OperationResultDto<String> createNewChat(CreateNewChatDto createNewChat) {
        OperationResultDto<String> result;
        result = this._chatDaoService.createNewChatCumHistory(createNewChat);

        return result;
    }

    public OperationResultDto<ChatHistoryDto[]> getChatHistory(SearchChatHistoryDto searchChatHistory) {
        OperationResultDto<ChatHistoryDto[]> result;
        result = this._chatDaoService.getChatHistoryList(searchChatHistory);

        return result;
    }

}
