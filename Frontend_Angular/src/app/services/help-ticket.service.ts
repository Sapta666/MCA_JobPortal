import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateHelpTicketDto } from "../models/function-model/help-ticket/CreateHelpTicketDto.model";
import { BasicResponseDto } from "../models/function-model/BasicResponseDto.model";
import { Observable } from "rxjs";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";
import { HelpTicketForListDto } from "../models/view-model/help-ticket/HelpTicketForListDto.model";
import { HelpTicketDetailsDto } from "../models/view-model/help-ticket/HelpTicketDetailsDto.model";
import { HelpTicketReplyDto } from "../models/function-model/help-ticket/HelpTicketReplyDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class HelpTicketService {

    constructor(
        private _http: HttpClient
    ) {

    }

    //#region Api Functions

    public createHelpTicket(createHelpTicket: CreateHelpTicketDto): Observable<BasicResponseDto> {
        return this._http.post<BasicResponseDto>(`{{baseUrl}}/helpTicket/create`,createHelpTicket);
    }

    public searchHelpTicket(user_id: string = ""): Observable<ResponseDataDto<HelpTicketForListDto[]>> {
        return this._http.get<ResponseDataDto<HelpTicketForListDto[]>>(`{{baseUrl}}/helpTicket/search?user_id=${user_id}`);
    }

    public getHelpTicketInfo(hlp_tkt_id: string): Observable<ResponseDataDto<HelpTicketDetailsDto>> {
        return this._http.get<ResponseDataDto<HelpTicketDetailsDto>>(`{{baseUrl}}/helpTicket/${hlp_tkt_id}`);
    }

    public replyToHelpTicket(hlp_tkt_id: string,helpTicketReply: HelpTicketReplyDto): Observable<BasicResponseDto> {
        return this._http.put<BasicResponseDto>(`{{baseUrl}}/helpTicket/${hlp_tkt_id}/reply`,helpTicketReply);
    }

    //#endregion

}