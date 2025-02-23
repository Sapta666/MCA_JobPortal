import { AfterContentInit, Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { getEmployerDetailsInstance } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { EmployerInfoDto, getEmployerInfoInstance } from "src/app/models/view-model/user/EmployerInfoDto.model";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";
import { EditUserInfoControlComponent } from "src/app/shared/components";

@Component({
    selector: 'app-view-employer-profile',
    templateUrl: './view-employer-profile.component.html'
})
export class ViewEmployerProfileComponent implements OnInit, AfterContentInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    private _employer_user_id: string = "";

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
        private _activatedRoute: ActivatedRoute,
        private _fb: FormBuilder,
        private _appSettingsService: AppSettingsService,
        private _userService: UserService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
        this.initializeEmployerFormGroup();
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            this._employer_user_id = params["employer_user_id"];
            this.getEmployerInfo();
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

    //#region Control Functions

    private loadEditUserInfoControl(): void {
        this.editUserInfoControl.pUserInfo = this.employerInfo.UserInfo;
        this.editUserInfoControl.loadControl();
    }

    //#endregion

    //#region Component Functions

    protected onGoBackClick(): void {
        this._router.navigate([`admin/${NavigationPageEnum.EmployerReport}`]);
    }

    //#endregion

    //#region Api Functions

    private getEmployerInfo(): void {
        this._userService
            .getEmployerInfo(this._employer_user_id)
            .subscribe((response: ResponseDataDto<EmployerInfoDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    this.employerInfo = response?.Data;
                    this.initializeFormGroupValue();
                } else {
                    alert("Failed to get data. " + response?.Message);
                    this._router.navigate([`admin/${NavigationPageEnum.EmployerReport}`]);
                }
            });
    }

    //#endregion

}

