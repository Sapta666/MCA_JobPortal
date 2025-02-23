import { Component, OnInit } from "@angular/core";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { BasicStatusDto, getBasicStatusInstance } from "src/app/models/view-model/report/BasicStatusDto.model";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { ReportService } from "src/app/services/report.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    protected userInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };

    protected basicStatus: BasicStatusDto = {
        ...getBasicStatusInstance()
    };

    //#endregion

    //#region Page Load

    constructor(
        private _appSettingsService: AppSettingsService,
        private _reportService: ReportService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        this.getBasicStatus();
    }

    //#endregion

    //#region Private Functions

    //#endregion

    //#region Component Functions

    private getBasicStatus(): void {
        this._reportService
            .getBasicStatus()
            .subscribe((response: ResponseDataDto<BasicStatusDto>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS")
                    this.basicStatus = response?.Data;
                else
                    alert("Failed to get data " + response?.Message);
            });

    }

    //#endregion

}