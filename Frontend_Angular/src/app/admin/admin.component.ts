import { Component } from '@angular/core';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { Router } from '@angular/router';
import { AppSettingsService } from '../services/common/app-settings.service';
import { AppSettingsDto } from '../models/common-models/AppSettingsDto.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  protected appSettings: AppSettingsDto;

  protected navigationItems: any = [
    { id: "Dashboard", text: "Dashboard" },
    { id: "HelpTicketList", text: "View Help Tickets" },
    { id: "Reports", text: "Reports" },
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
        this._router.navigate([`admin/${NavigationPageEnum.AdminDashboard}`])
        break;
      case "HelpTicketList":
        this._router.navigate([`admin/${NavigationPageEnum.HlpTktList}`]);
        break;
      case "Reports":
        this._router.navigate([`admin/${NavigationPageEnum.ReportTypes}`]);
        break;
    }
  }

  //#endregion

}

