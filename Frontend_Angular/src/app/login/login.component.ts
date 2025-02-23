import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { UserTypeEnum } from '../common/enums/user-type-enum.enum';
import { LoginCredDto, getLoginCredInstance } from '../models/function-model/login/LoginCredDto.model';
import { LoginService } from '../services/login.service';
import { BasicResponseDto } from '../models/function-model/BasicResponseDto.model';
import { AppSettingsDto } from '../models/common-models/AppSettingsDto.model';
import { ResponseDataDto } from '../models/function-model/ResponseDataDto.model';
import { AppSettingsService } from '../services/common/app-settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  //#region Variables

  public formGroup: FormGroup;
  public showUserTypePopup: boolean = false;
  public userTypeEnum: typeof UserTypeEnum = UserTypeEnum;

  //#endregion

  //#region Page Load

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _appSettingsService: AppSettingsService,
    private _loginService: LoginService,
  ) {

  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  //#endregion

  //#region Private Functions

  private initializeFormGroup(): void {
    this.formGroup = this._fb.group({
      ...getLoginCredInstance()
    });

    this.formGroup.get("Username")?.addValidators([Validators.required]);
    this.formGroup.get("Password")?.addValidators([Validators.required]);
  }

  private validateData(): boolean {
    let errorMsg: string = "";
    try {
      if (this.formGroup.value.Username.trim() == "")
        errorMsg += "Username is required. \n";
      if (this.formGroup.value.Password.trim() == "")
        errorMsg += "Password is required. \n";
      if (!this.formGroup.valid || errorMsg.length > 0) {
        alert("Form Validation Failed. " + errorMsg);
        return false;
      }
    } catch (e) {
      alert("Form Validation Failed. " + errorMsg);
      return false;
    }
    return true;
  }

  private navigateToHome(appSettings: AppSettingsDto): void {
    this._appSettingsService.setAppSettingsData(appSettings);
    switch (appSettings.user_type) {
      case UserTypeEnum.EMPLOYER:
        this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`]);
        break;
      case UserTypeEnum.JOBSEEKER:
        this._router.navigate([`jobseeker/${NavigationPageEnum.JobseekerDashboard}`]);
        break;
      case UserTypeEnum.ADMIN:
        this._router.navigate([`admin/${NavigationPageEnum.AdminDashboard}`]);
        break;
    }
  }

  //#endregion

  //#region Component Functions

  public onSubmitClick(): void {
    if (!this.validateData())
      return;

    let loginCred: LoginCredDto = {
      Username: this.formGroup.value.Username,
      Password: this.formGroup.value.Password
    };
    this.login(loginCred);
  }

  public onSignUpClick(): void {
    this.showUserTypePopup = true;
  }

  public onDialogClose(): void {
    this.showUserTypePopup = false;
  }

  public onUserTypeSelect(userTypeEnum: UserTypeEnum): void {
    this.showUserTypePopup = false;
    this._router.navigate(["login/" + NavigationPageEnum.Registration, userTypeEnum])
  }

  //#endregion

  //#region Api Functions

  private login(loginCred: LoginCredDto): void {
    this._loginService
      .validateLogin(loginCred)
      .subscribe((response: ResponseDataDto<AppSettingsDto>) => {
        if (response?.Status?.toUpperCase() == "SUCCESS") {
          this.navigateToHome(response?.Data);
        } else
          alert("Login Failed");
      });
  }

  //#endregion

}

