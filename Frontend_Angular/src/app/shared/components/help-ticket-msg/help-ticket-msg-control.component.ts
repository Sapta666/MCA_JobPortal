import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateHelpTicketDto } from 'src/app/models/function-model/help-ticket/CreateHelpTicketDto.model';
import { HelpTicketService } from 'src/app/services/help-ticket.service';

@Component({
    selector: 'app-help-ticket-msg-control',
    templateUrl: './help-ticket-msg-control.component.html'
})
export class HelpTicketMsgControlComponent {

    //#region Variables

    protected message: string = "";
    protected hlpTktMsgItems: { topic_id: string, topic: string }[] = [
        { topic_id: 'hlpTktTp001', topic: 'Software Bugs' },
        { topic_id: 'hlpTktTp002', topic: 'Profile Info' },
        { topic_id: 'hlpTktTp003', topic: 'Job Application' },
        { topic_id: 'hlpTktTp004', topic: 'Accepting Job Application' },
        { topic_id: 'hlpTktTp005', topic: 'Messaging' },
    ];
    protected currentHlpTktMsg: {topic_id: string,topic: string} = this.hlpTktMsgItems[0];

    //#endregion

    //#region Properties

    @Input() pUser_Id: string = "";

    @Output() onCancel = new EventEmitter();
    @Output() onSave = new EventEmitter();

    //#endregion

    //#region Page Load

    constructor(
        private _helpTicketService: HelpTicketService
    ) {
    }

    //#endregion

    //#region Public Functions

    public loadControl(): void {

    }

    //#endregion

    //#region Private Functions

    private validateData(): boolean {
        let errorMessage: string = "";
        
        if (this.message.trim() == "")
            errorMessage += "\n Help ticket message is required.";

        if (errorMessage != "") {
            alert("Invalid data !. " + errorMessage);
            return false;
        }

        return true;
    }

    //#endregion

    //#region Component Functions

    protected onCancelClick(): void {
        this.onCancel.emit();
    }

    protected onSubmitClick(): void {
        if (this.validateData()) {
            let createHelpTicket: CreateHelpTicketDto = {
                user_id: this.pUser_Id,
                topic_id: this.currentHlpTktMsg.topic_id,
                help_ticket_message: this.message
            };

            this.createHelpTicket(createHelpTicket);
        }
    }

    //#endregion

    //#region Api Functions

    private createHelpTicket(createHelpTicket: CreateHelpTicketDto): void {
        this._helpTicketService
            .createHelpTicket(createHelpTicket)
            .subscribe(response => {
                if (response?.Status?.toUpperCase() == "SUCCESS") 
                    this.onSave.emit();
                else
                    alert("Failed to create help ticket. " + response?.Message);
            });
    }

    //#endregion

}
