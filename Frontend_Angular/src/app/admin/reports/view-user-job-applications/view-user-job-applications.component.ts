import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { HelpTicketForListDto } from "src/app/models/view-model/help-ticket/HelpTicketForListDto.model";
import { JobApplicationViewDto } from "src/app/models/view-model/job-posts/JobApplicationsViewDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { HelpTicketService } from "src/app/services/help-ticket.service";
import { JobPostService } from "src/app/services/job-post.service";

@Component({
  selector: 'app-view-user-job-applications',
  templateUrl: './view-user-job-applications.component.html'
})
export class ViewUserJobApplicationsListComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _jobseeker_id: string = "";

  protected gridData: JobApplicationViewDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appSettingsService: AppSettingsService,
    private _jobPostService: JobPostService
  ) {
    this.appSettings = this._appSettingsService.getAppSettingsData();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this._jobseeker_id = params["jobseeker_id"];
      if(!this._jobseeker_id)
          this._jobseeker_id = "";

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

  private loadItems(items: JobApplicationViewDto[]): void {
    this.gridData = items;
  }

  //#endregion

  //#region Component Functions

  protected onGoBackClick(): void {
    this._router.navigate([`admin/${NavigationPageEnum.JobseekerReport}`]);
  }

  //#endregion

  //#region Api Functions

  private searchJobs(): void {
    this._jobPostService
      .searchJobApplications(this._jobseeker_id)
      .subscribe((response: ResponseDataDto<JobApplicationViewDto[]>) => {
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