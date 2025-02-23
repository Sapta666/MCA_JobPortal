import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { SearchJobDto, getSearchJobInstance } from "src/app/models/function-model/job-posts/SearchJobDto.model";
import { JobPostsDto } from "src/app/models/view-model/job-posts/JobPostsDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { JobPostService } from "src/app/services/job-post.service";

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html'
})
export class SearchJobComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _searchJob: SearchJobDto = {
    ...getSearchJobInstance()
  };

  protected gridData: JobPostsDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _appSettingsService: AppSettingsService,
    private _jobPostService: JobPostService,
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
    this._searchJob = {
      ...this._searchJob,
    };

    this.searchJobs();
  }

  private loadItems(items: JobPostsDto[]): void {
    this.gridData = items;
  }

  protected onViewJobPostClick(dataItem: JobPostsDto): void {
    this._router.navigate([`jobseeker/${NavigationPageEnum.ViewJob}/${dataItem.job_post_id}`]);
  }

  //#endregion

  //#region Component Functions

  //#endregion

  //#region Api Functions

  private searchJobs(): void {
    this._jobPostService
      .searchJobs(this._searchJob)
      .subscribe((response: ResponseDataDto<JobPostsDto[]>) => {
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