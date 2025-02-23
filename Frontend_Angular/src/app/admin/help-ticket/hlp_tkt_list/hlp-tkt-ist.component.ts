import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { HelpTicketForListDto } from "src/app/models/view-model/help-ticket/HelpTicketForListDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { HelpTicketService } from "src/app/services/help-ticket.service";

@Component({
  selector: 'app-hlp-tkt-list',
  templateUrl: './hlp-tkt-list.component.html'
})
export class HlpTktListComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _user_id: string = "";

  protected gridData: HelpTicketForListDto[] = [];
  protected gridHeight: number = 500;

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
    this._activatedRoute.queryParams.subscribe(params => {
      this._user_id = params["user_id"];
      if(!this._user_id)
          this._user_id = "";

      this.searchList();
    });
  }

  ngAfterContentInit(): void {
    this.gridHeight = window.innerHeight - 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.gridHeight = window.innerHeight - 100;
  }

  //#endregion

  //#region Private Functions

  //#endregion

  //#region Grid Functions

  private searchList(): void {

    this.searchJobs();
  }

  private loadItems(items: HelpTicketForListDto[]): void {
    this.gridData = items;
  }

  protected onManageHelpTicketClick(dataItem: HelpTicketForListDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.ManageHelpTicket}/${dataItem.hlp_tkt_id}`]);
  }

  //#endregion

  //#region Component Functions

  //#endregion

  //#region Api Functions

  private searchJobs(): void {
    this._helpTicketService
      .searchHelpTicket(this._user_id)
      .subscribe((response: ResponseDataDto<HelpTicketForListDto[]>) => {
        if(response?.Status?.toUpperCase() == "SUCCESS") 
          this.loadItems(response?.Data);
         else {
          this.loadItems([]);
          alert("Failed to get data. "+response?.Message);
        }
      }); 
  }

  //#endregion

}