import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { JobseekerReportViewDto } from "src/app/models/view-model/report/JobseekerReportViewDto.model";
import { EmployerDetailsDto } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { EmployerDetailsViewDto } from "src/app/models/view-model/user/EmployerDetailsViewDto.model";
import { JobseekerDetailsViewDto } from "src/app/models/view-model/user/JobseekerDetailsViewDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { ReportService } from "src/app/services/report.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-jobseeker-report',
  templateUrl: './jobseeker-report.component.html'
})
export class JobseekerReportComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  protected gridData: JobseekerReportViewDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _appSettingsService: AppSettingsService,
    private _reportService: ReportService,
  ) {

  }

  ngOnInit(): void {
    this.searchList();
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

    this.getJobseekerReport();
  }

  private loadItems(items: JobseekerReportViewDto[]): void {
    this.gridData = items;
  }

  protected onViewJobseekerInfoClick(dataItem: JobseekerReportViewDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.ViewJobseekerProfile}/${dataItem.user_id}`]);
  }

  protected onViewJobApplicationsClick(dataItem: JobseekerReportViewDto): void {
    this._router.navigate([`admin/${NavigationPageEnum.ViewUserJobApplicationsList}`],{
      queryParams: {
        jobseeker_id: dataItem.jobseeker_id
      }
    });    
  }

  protected onViewHelpTicketsClick(dataItem: JobseekerReportViewDto): void {
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

  private getJobseekerReport(): void {
    this._reportService
    .getJobseekerReport()
    .subscribe((response: ResponseDataDto<JobseekerReportViewDto[]>) => {
      if(response?.Status?.toUpperCase() == "SUCCESS") 
        this.loadItems(response?.Data);
       else {
        alert("Failed to get data. "+response?.Message);
        this.loadItems([]);
      }
    });
  }

  //#endregion

}