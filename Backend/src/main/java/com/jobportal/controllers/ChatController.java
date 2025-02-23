package com.jobportal.controllers;

import com.jobportal.models.db.ChatHistoryDto;
import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;
import com.jobportal.models.function.chat.CreateNewChatDto;
import com.jobportal.models.function.chat.SearchChatHistoryDto;
import com.jobportal.models.view.AppSettingsDto;
import com.jobportal.services.ChatService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatService _chatService;

    public ChatController() {
        // TODO Auto-generated constructor stub
    }

    @PostMapping("/send")
    public BasicResponseDto createNewChat(@RequestBody CreateNewChatDto createNewChat) {
        BasicResponseDto response = new BasicResponseDto();
        OperationResultDto result = new OperationResultDto();

        result = this._chatService.createNewChat(createNewChat);

        if(result.get_isSuccess())
            response.setStatus("Success");
        else {
            response.setMessage(result.get_message());
            response.setStatus("Failed");
        }

        return response;
    }

    @PostMapping("/search")
    public ResponseDataDto<ChatHistoryDto[]> searchChatHistory(@RequestBody SearchChatHistoryDto searchChatHistory) {
        ResponseDataDto<ChatHistoryDto[]> response = new ResponseDataDto<ChatHistoryDto[]>();
        OperationResultDto<ChatHistoryDto[]> result = new OperationResultDto<ChatHistoryDto[]>();

        result = this._chatService.getChatHistory(searchChatHistory);

        if(result.get_isSuccess()) {
            response.setStatus("Success");
            response.setData(result.get_data());
        } else {
            response.setStatus("Failed");
            response.setMessage(result.get_message());
        }

        return response;
    }

}
