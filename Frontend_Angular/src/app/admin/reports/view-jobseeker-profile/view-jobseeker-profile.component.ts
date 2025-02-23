import { AfterContentInit, Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { getJobseekerDetailsInstance } from "src/app/models/view-model/user/JobseekerDetailsDto.model";
import { JobseekerInfoDto, getJobseekerInfoInstance } from "src/app/models/view-model/user/JobseekerInfoDto.model";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";
import { EditUserInfoControlComponent } from "src/app/shared/components";

@Component({
    selector: 'app-view-jobseeker-profile',
    templateUrl: './view-jobseeker-profile.component.html'
})
export class ViewJobseekerProfileComponent implements OnInit, AfterContentInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    private _jobseeker_user_id: string = "";

    protected jobseekerFormGroup: FormGroup;
    protected userInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };
    protected jobseekerInfo: JobseekerInfoDto = {
        ...getJobseekerInfoInstance()
    };

    protected totalHeight: number = 500;

    @ViewChild("editUserInfoControl") editUserInfoControl: EditUserInfoControlComponent;

    //#endregion

    //#region Page Load

    constructor(
        private _router: Router,
        private _fb: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _appSettingsService: AppSettingsService,
        private _userService: UserService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
        this.initializeJobseekerFormGroup();
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            this._jobseeker_user_id = params["jobseeker_user_id"];
            this.getJobseekerInfo();
        });
    }

    ngAfterContentInit(): void {
        this.totalHeight = window.innerHeight - 170;
    }

    @HostListener('window:resize', ["$event.target"])
    onResize() {
        this.totalHeight = window.innerHeight - 170;
    }

    //#endregion

    //#region Private Functions

    private initializeFormGroupValue(): void {
        this.initializeJobseekerFormGroupValue();

        setTimeout(() => {
            this.loadEditUserInfoControl();
        }, 200);
    }

    private initializeJobseekerFormGroup(): void {
        this.jobseekerFormGroup = this._fb.group({
            ...getJobseekerDetailsInstance()
        });
    }

    private initializeJobseekerFormGroupValue(): void {
        this.jobseekerFormGroup.patchValue({
            ...this.jobseekerInfo.JobseekerDetails
        });
    }

    //#endregion

    //#region Control Functions

    private loadEditUserInfoControl(): void {
        this.editUserInfoControl.pUserInfo = this.jobseekerInfo.UserInfo;
        this.editUserInfoControl.loadControl();
    }

    //#endregion

    //#region Component Functions

    protected onGoBackClick(): void {
        this._router.navigate([`admin/${NavigationPageEnum.JobseekerReport}`]);
    }

    //#endregion

    //#region Api Functions

    private getJobseekerInfo(): void {
        this._userService
            .getJobseekerInfo(this._jobseeker_user_id)
            .subscribe((response: ResponseDataDto<JobseekerInfoDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    this.jobseekerInfo = response?.Data;
                    this.initializeFormGroupValue();
                } else {
                    alert("Failed to get data. " + response?.Message);
                    this._router.navigate([`admin/${NavigationPageEnum.JobseekerReport}`]);
                }
            });
    }

    //#endregion

}

