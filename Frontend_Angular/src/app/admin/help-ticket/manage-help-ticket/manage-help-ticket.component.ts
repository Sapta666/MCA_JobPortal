import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { HelpTicketReplyDto } from "src/app/models/function-model/help-ticket/HelpTicketReplyDto.model";
import { HelpTicketDetailsDto, getHelpTicketDetailsInstance } from "src/app/models/view-model/help-ticket/HelpTicketDetailsDto.model";
import { HelpTicketForListDto } from "src/app/models/view-model/help-ticket/HelpTicketForListDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { HelpTicketService } from "src/app/services/help-ticket.service";

@Component({
  selector: 'app-manage-help-ticket',
  templateUrl: './manage-help-ticket.component.html'
})
export class ManageHelpTicketComponent implements OnInit, AfterViewInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _hlp_tkt_id: string = "";

  protected helpTicketDetails: HelpTicketDetailsDto = {
    ...getHelpTicketDetailsInstance()
  };
  protected replyMessage: string = "";

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appSettingsService: AppSettingsService,
    private _helpTicketService: HelpTicketService
  ) {
    this.appSettings = this._appSettingsService.getAppSettingsData();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._hlp_tkt_id = params["hlp_tkt_id"];
      this.getHelpTicketInfo();
    });
  }

  //#endregion

  //#region Private Functions

  //#endregion

  //#region Component Functions

  protected onGoBackClick(): void {
    this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`]);
  }

  protected onSubmitClick(): void {
    if (this.replyMessage?.trim().length > 0) {
      let helpTicketReply: HelpTicketReplyDto = {
        message: this.replyMessage,
        reply_admin_id: this.appSettings.user_id
      };

      this.replyToHelpTicket(helpTicketReply);
    } else
      alert("Form validation failed");
  }

  //#endregion

  //#region Api Functions

  private getHelpTicketInfo(): void {
    this._helpTicketService
      .getHelpTicketInfo(this._hlp_tkt_id)
      .subscribe((response) => {
        if (response?.Status?.toUpperCase() == "SUCCESS") {
          this.helpTicketDetails = response?.Data;
          this.replyMessage = this.helpTicketDetails.rply_message
            ? this.helpTicketDetails.rply_message
            : "";
        } else {
          alert("Failed to get data. " + response?.Message);
          this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`]);
        }
      });
  }

  private replyToHelpTicket(helpTicketReply: HelpTicketReplyDto): void {
    this._helpTicketService
      .replyToHelpTicket(this._hlp_tkt_id, helpTicketReply)
      .subscribe((response) => {
        if (response?.Status?.toUpperCase() == "SUCCESS")
          this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`]);
        else {
          alert("Failed to get data. " + response?.Message);
          this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`]);
        }
      });
  }

  //#endregion

}