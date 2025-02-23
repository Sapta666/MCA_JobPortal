import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { SearchJobDto, getSearchJobInstance } from "src/app/models/function-model/job-posts/SearchJobDto.model";
import { JobPostsDto } from "src/app/models/view-model/job-posts/JobPostsDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { JobPostService } from "src/app/services/job-post.service";

@Component({
  selector: 'app-view-employer-job-posts',
  templateUrl: './view-employer-job-posts.component.html'
})
export class ViewEmployerJobPostsComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _searchJob: SearchJobDto = {
    ...getSearchJobInstance()
  };
  private _employer_id: string = "";

  protected gridData: JobPostsDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appSettingsService: AppSettingsService,
    private _jobPostService: JobPostService,
  ) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._employer_id = params["employer_id"];
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
    this._searchJob = {
      ...this._searchJob,

      employer_id: this._employer_id
    };

    this.searchJobs();
  }

  private loadItems(items: JobPostsDto[]): void {
    this.gridData = items;
  }

  // protected onViewJobPostClick(dataItem: JobPostsDto): void {
  //   this._router.navigate([`admin/${NavigationPageEnum.EmployerReport}`]);
  // }

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