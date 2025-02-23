import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationPageEnum } from 'src/app/common/enums/navigation-page.enum';
import { AppSettingsDto } from 'src/app/models/common-models/AppSettingsDto.model';
import { AppSettingsService } from 'src/app/services/common/app-settings.service';
import { HelpTicketMsgControlComponent } from 'src/app/shared/components';

@Component({
    selector: 'app-file-jobseeker-help-ticket',
    templateUrl: './file-jobseeker-help-ticket.component.html'
})
export class FileJobseekerHelpTicketComponent implements AfterViewInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    @ViewChild("helpTicketMsgControl") helpTicketMsgControl: HelpTicketMsgControlComponent;

    //#endregion

    //#region Page Load

    constructor(
        private _router: Router,
        private _appSettingsService: AppSettingsService        
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.loadHelpTicketMsgControl();
        },200);
    }

    //#endregion

    //#region Private Functions

    //#endregion

    //#region Control Functions

    private loadHelpTicketMsgControl(): void {
        this.helpTicketMsgControl.pUser_Id = this._appSettings.user_id;
        this.helpTicketMsgControl.loadControl();
    }

    protected onHelpTicketMsgCancelSave(): void {
        this._router.navigate([`jobseeker/${NavigationPageEnum.JobseekerDashboard}`]);
    }

    //#endregion

}
