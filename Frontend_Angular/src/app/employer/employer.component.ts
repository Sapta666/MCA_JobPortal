import { Component } from '@angular/core';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { Router } from '@angular/router';
import { AppSettingsService } from '../services/common/app-settings.service';
import { AppSettingsDto } from '../models/common-models/AppSettingsDto.model';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent {


  protected appSettings: AppSettingsDto;

  protected navigationItems: any = [
    { id: "Dashboard", text: "Dashboard" },
    { id: "PostJob", text: "Post A Job" },
    { id: "EditEmployerProfile", text: "Edit Profile" },
    { id: "SearchJobseekers", text: "Find Jobseekers" },
    { id: "FileHelpTicket", text: "File Help Ticket" },
  ];

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
        this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`])
        break;
      case "PostJob":
        this._router.navigate([`employer/${NavigationPageEnum.CreateJobPost}`]);
        break;
      case "SearchJobseekers":
        this._router.navigate([`employer/${NavigationPageEnum.JobseekerList}`]);
        break;        
      case "EditEmployerProfile":
        this._router.navigate([`employer/${NavigationPageEnum.EditEmployerProfile}`])
        break;
      case "FileHelpTicket":
        this._router.navigate([`employer/${NavigationPageEnum.FileEmployerHelpTicket}`]);
        break;
    }
  }

  //#endregion

}
