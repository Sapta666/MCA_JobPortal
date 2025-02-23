import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";

@Component({
    selector: 'app-report-types',
    templateUrl: './report-types.component.html'
})
export class ReportTypesComponent implements OnInit, AfterViewInit {

    //#region Variables

    protected appSettings: AppSettingsDto;

    //#endregion

    //#region Page Load

    constructor(
        private _router: Router,
        private _appSettingsService: AppSettingsService,
    ) {
        this.appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        
    }

    //#endregion

    //#region Private Functions

    //#endregion

    //#region Component Functions

    protected onEmployeeReportClick(): void {
        this._router.navigate([`admin/${NavigationPageEnum.EmployerReport}`]);
    }

    protected onJobseekerReportClick(): void {
        this._router.navigate([`admin/${NavigationPageEnum.JobseekerReport}`]);
    }

    //#endregion

}

