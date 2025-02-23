import { Component, OnInit } from "@angular/core";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-jobseeker-dashboard',
    templateUrl: './jobseeker-dashboard.component.html'
})
export class JobseekerDashboardComponent implements OnInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    protected userInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };

    //#endregion

    //#region Page Load

    constructor(
        private _appSettingsService: AppSettingsService,
        private _userService: UserService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        this.getUserInfo();
    }

    //#endregion

    //#region Private Functions

    //#endregion

    //#region Component Functions

    private getUserInfo(): void {
        this._userService
            .getUserInfo(this._appSettings.user_id)
            .subscribe((response: ResponseDataDto<UserInfoDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS")
                    this.userInfo = response?.Data;
                else
                    alert("Failed to get data " + response?.Message);
            });

    }

    //#endregion

}