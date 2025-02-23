import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { EmployerReportViewDto } from "src/app/models/view-model/report/EmployerReportViewDto.model";
import { EmployerDetailsViewDto } from "src/app/models/view-model/user/EmployerDetailsViewDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { ReportService } from "src/app/services/report.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-employer-report',
  templateUrl: './employer-report.component.html'
})
export class EmployerReportComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  protected gridData: EmployerReportViewDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _appSettingsService: AppSettingsService,
    private _userService: UserService,
    private _reportService: ReportService,
  ) {

  }

  ngOnInit(): void {
    this.searchList();
    this.getEmployerReport();
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

    this.getEmployerReport();
  }

  private loadItems(items: EmployerReportViewDto[]): void {
    this.gridData = items;
  }

  protected onViewEmployerInfoClick(dataItem: EmployerReportViewDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.ViewEmployerProfile}/${dataItem.user_id}`]);
  }

  protected onViewJobPostsClick(dataItem: EmployerReportViewDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.ViewEmployerJobPosts}/${dataItem.user_id}`]);    
  }

  protected onViewHelpTicketsClick(dataItem: EmployerReportViewDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`],{
      queryParams: {
        user_id: dataItem.user_id
      }
    });        
  }

  protected onGoBackClick(): void {
    this._router.navigate([`admin/${NavigationPageEnum.ReportTypes}`]);
  }

  //#endregion

  //#region Api Functions

  private getEmployerReport(): void {
    this._reportService
      .getEmployerReport()
      .subscribe((response: ResponseDataDto<EmployerReportViewDto[]>) => {
        if (response?.Status?.toUpperCase() == "SUCCESS")
          this.loadItems(response?.Data);
        else {
          this.loadItems([]);
          alert("Failed to get data. " + response?.Message);
        }
      });
  }

  //#endregion

}