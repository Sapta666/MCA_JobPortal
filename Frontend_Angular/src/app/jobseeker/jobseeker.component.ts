import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { AppSettingsService } from '../services/common/app-settings.service';
import { AppSettingsDto } from '../models/common-models/AppSettingsDto.model';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html'
})
export class JobseekerComponent {

  //#region Variables

  protected appSettings: AppSettingsDto;

  protected navigationItems: any = [
    { id: "Dashboard", text: "Dashboard" },
    { id: "SearchJob", text: "Search Job" },
    { id: "EditJobseekerProfile", text: "Edit Profile" },
    { id: "UploadResume", text: "Manage Resume" },
    { id: "SearchEmployer", text: "Search Employer" },
    { id: "FileHelpTicket", text: "File Help Ticket" },
  ]

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _appSettingsService: AppSettingsService,
  ) {
    this.appSettings = this._appSettingsService.getAppSettingsData();
  }

  //#endregion

  //#region Private Functions

  //#endregion

  //#region Component Functions

  protected onLogoutClick(): void {
    this._router.navigate(['']);
  }

  protected onNavigationItemClick(navigationItem: string): void {
    switch (navigationItem) {
      case "Dashboard":
        this._router.navigate([`jobseeker/${NavigationPageEnum.JobseekerDashboard}`])
        break;
      case "SearchJob":
        this._router.navigate([`jobseeker/${NavigationPageEnum.SearchJob}`])
        break;
      case "EditJobseekerProfile":
        this._router.navigate([`jobseeker/${NavigationPageEnum.EditJobseekerProfile}`])
        break;
      case "UploadResume":
        this._router.navigate([`jobseeker/${NavigationPageEnum.UploadResume}`]);
        break;
      case "SearchEmployer":
        this._router.navigate([`jobseeker/${NavigationPageEnum.EmployerList}`]);
        break;
      case "FileHelpTicket":
        this._router.navigate([`jobseeker/${NavigationPageEnum.FileJobseekerHelpTicket}`]);
        break;
    }
  }

  //#endregion

}
