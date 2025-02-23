import { AfterContentInit, Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { EmployerDetailsDto } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { EmployerDetailsViewDto } from "src/app/models/view-model/user/EmployerDetailsViewDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html'
})
export class EmployerListComponent implements OnInit, AfterContentInit {

  //#region Variables

  protected appSettings: AppSettingsDto;

  protected gridData: EmployerDetailsViewDto[] = [];
  protected gridHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _appSettingsService: AppSettingsService,
    private _userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.searchList();
  }

  ngAfterContentInit(): void {
    this.gridHeight = window.innerHeight - 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.gridHeight = window.innerHeight - 100;
  }

  //#endregion

  //#region Private Functions

  //#endregion

  //#region Grid Functions

  private searchList(): void {

    this.searchJobs();
  }

  private loadItems(items: EmployerDetailsViewDto[]): void {
    this.gridData = items;
  }

  protected onMessageEmployerClick(dataItem: EmployerDetailsViewDto): void {
    this._router.navigate([`jobseeker/${NavigationPageEnum.ManageChat}/${dataItem.user_id}`]);
  }

  //#endregion

  //#region Component Functions

  //#endregion

  //#region Api Functions

  private searchJobs(): void {
    this._userService
      .getEmployerList()
      .subscribe((response: ResponseDataDto<EmployerDetailsViewDto[]>) => {
        if(response?.Status?.toUpperCase() == "SUCCESS") 
          this.loadItems(response?.Data);
         else {
          this.loadItems([]);
          alert("Failed to get data. "+response?.Message);
        }
      }); 
  }

  //#endregion

}