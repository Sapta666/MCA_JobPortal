import { AfterContentInit, Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { BasicResponseDto } from "src/app/models/function-model/BasicResponseDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { UpdateEmployerInfoDto } from "src/app/models/function-model/user/UpdateEmployerInfoDto.model";
import { UpdateJobseekerInfoDto } from "src/app/models/function-model/user/UpdateJobseekerInfoDto.model";
import { getEmployerDetailsInstance } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { EmployerInfoDto, getEmployerInfoInstance } from "src/app/models/view-model/user/EmployerInfoDto.model";
import { JobseekerDetailsDto, getJobseekerDetailsInstance } from "src/app/models/view-model/user/JobseekerDetailsDto.model";
import { JobseekerInfoDto, getJobseekerInfoInstance } from "src/app/models/view-model/user/JobseekerInfoDto.model";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";
import { EditUserInfoControlComponent } from "src/app/shared/components";

@Component({
    selector: 'app-edit-employer-profile',
    templateUrl: './edit-employer-profile.component.html'
})
export class EditEmployerProfileComponent implements OnInit, AfterContentInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    protected employerFormGroup: FormGroup;
    protected industryTypeItems: { id: string, name: string; }[] = [
        { id: "indType101", name: "Transport" },
        { id: "indType102", name: "Aerospace" },
        { id: "indType103", name: "Agriculture" },
        { id: "indType104", name: "Computer" },
        { id: "indType105", name: "Telecommunication" },
    ];
    protected userInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };
    protected employerInfo: EmployerInfoDto = {
        ...getEmployerInfoInstance()
    };
    protected industryTypeItem: { id: string, name: string } | undefined = { id: "indType101", name: "Transport" };

    protected totalHeight: number = 500;

    @ViewChild("editUserInfoControl") editUserInfoControl: EditUserInfoControlComponent;

    //#endregion

    //#region Page Load

    constructor(
        private _router: Router,
        private _fb: FormBuilder,
        private _appSettingsService: AppSettingsService,
        private _userService: UserService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
        this.initializeEmployerFormGroup();
    }

    ngOnInit(): void {
        this.getEmployerInfo();
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

    private initializeEmployerFormGroup(): void {
        this.employerFormGroup = this._fb.group({
            ...getEmployerDetailsInstance()
        });
    }

    private initializeJobseekerFormGroupValue(): void {
        this.employerFormGroup.patchValue({
            ...this.employerInfo.EmployerDetails
        });
        this.industryTypeItem = this.industryTypeItems.find(item => {
            return item.id == this.employerInfo.EmployerDetails.industry_id;
        });
    }

    //#endregion

    //#region Combo Functions

    protected onIndustryTypeChange(dataItem: { id: string, name: string }): void {
        this.employerFormGroup.get("industry_id")?.setValue(dataItem.id);
    }

    //#endregion

    //#region Control Functions

    private loadEditUserInfoControl(): void {
        this.editUserInfoControl.pUserInfo = this.employerInfo.UserInfo;
        this.editUserInfoControl.loadControl();
    }

    //#endregion

    //#region Component Functions

    protected onCancelClick(): void {
        this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`]);
    }

    protected onSubmitClick(): void {
        let updateEmployerInfo: UpdateEmployerInfoDto = {
            UserInfo: this.editUserInfoControl.getUserUserInfoResult(),
            EmployerDetails: this.employerFormGroup.getRawValue()
        };

        this.updateEmployerProfileInfo(updateEmployerInfo);
    }

    //#endregion

    //#region Api Functions

    private getEmployerInfo(): void {
        this._userService
            .getEmployerInfo(this._appSettings.user_id)
            .subscribe((response: ResponseDataDto<EmployerInfoDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    this.employerInfo = response?.Data;
                    this.initializeFormGroupValue();
                } else {
                    alert("Failed to get data. " + response?.Message);
                    this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`]);
                }
            });
    }

    private updateEmployerProfileInfo(updateEmployerInfo: UpdateEmployerInfoDto): void {
        this._userService
            .updateEmployerInfo(updateEmployerInfo)
            .subscribe((response: BasicResponseDto) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    alert("Employer seeker info successfully updated");
                    this.getEmployerInfo();
                } else
                    alert("Failed to update employer seeker info. " + response?.Message);
            });
    }

    //#endregion

}

