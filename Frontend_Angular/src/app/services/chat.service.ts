import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateNewChatDto } from "../models/function-model/chat/CreateNewChatDto.model";
import { BasicResponseDto } from "../models/function-model/BasicResponseDto.model";
import { Observable } from "rxjs";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";
import { ChatHistoryDto } from "../models/view-model/chat/ChatHistoryDto.model";
import { SearchChatHistoryDto } from "../models/function-model/chat/SearchChatHistoryDto.model";

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(
        private _http: HttpClient
    ) {

    }

    public sendChat(createNewChat: CreateNewChatDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/chat/send`, createNewChat);
    }

    public searchChatHistory(searchChatHistory: SearchChatHistoryDto): Observable<ResponseDataDto<ChatHistoryDto[]>> {
        return this._http.post<ResponseDataDto<ChatHistoryDto[]>>(`{{baseUrl}}/chat/search`, searchChatHistory);
    }

}