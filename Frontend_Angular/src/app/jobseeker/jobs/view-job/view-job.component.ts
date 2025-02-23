import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { BasicResponseDto } from "src/app/models/function-model/BasicResponseDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { ApplyToJobDto } from "src/app/models/function-model/job-posts/ApplyToJobDto.model";
import { JobPostsDto, getJobPostsInstance } from "src/app/models/view-model/job-posts/JobPostsDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { JobPostService } from "src/app/services/job-post.service";

@Component({
    selector: 'app-view-job',
    templateUrl: './view-job.component.html'
})
export class ViewJobComponent implements OnInit, AfterContentInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    private _job_post_id: string = "";

    protected jobPostInfo: JobPostsDto = {
        ...getJobPostsInstance()
    };
    protected pre_application_data: string = "";
    protected showPreApplicationDataPopup: boolean = false;

    protected totalHeight: number = 500;

    //#endregion

    //#region Page Load

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _appSettingsService: AppSettingsService,
        private _jobPostService: JobPostService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            this._job_post_id = params["job_post_id"];

            this.getJobPostInfo();
        });
    }

    ngAfterContentInit(): void {
        this.totalHeight = window.innerHeight - 200;
    }

    @HostListener("resize", ["$event"])
    onResize(): void {
        this.totalHeight = window.innerHeight - 200;
    }

    //#endregion

    //#region Private Functions

    //#endregion

    //#region Popup Functions

    private openPreApplicationDataPopup(): void {
        this.showPreApplicationDataPopup = true;
    }

    protected onSubmitClick(): void {
        this.showPreApplicationDataPopup = false;

        this.applyForJob(this.pre_application_data);
    }

    //#endregion

    //#region Component Functions    

    protected onGoBackClick(): void {
        this._router.navigate([`jobseeker/${NavigationPageEnum.SearchJob}`]);
    }

    protected onApplyToJobClick(): void {
        if (this.jobPostInfo.has_pre_application_data == 'Y')
            this.openPreApplicationDataPopup();

        this.applyForJob();
    }

    //#endregion

    //#region Api Functions

    private getJobPostInfo(): void {
        this._jobPostService
            .getJobPostInfo(this._job_post_id)
            .subscribe((response: ResponseDataDto<JobPostsDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS")
                    this.jobPostInfo = response?.Data;
                else
                    alert("Failed to get data. " + response?.Message);
            });
    }

    private applyForJob(pre_application_data: string = ""): void {
        let applyToJob: ApplyToJobDto = {
            job_post_id: this._job_post_id,
            jobseeker_id: this._appSettings.jobseeker_id,
            pre_application_data: pre_application_data,
        };

        this._jobPostService
        .applyToJob(applyToJob)
        .subscribe((response: BasicResponseDto) => {
            if(response?.Status?.toUpperCase() == "SUCCESS")
                this._router.navigate([`jobseeker/${NavigationPageEnum.JobseekerDashboard}`]);
            else  
                alert("Failed to apply to job. "+response?.Message);
        });
    }

    //#endregion

}