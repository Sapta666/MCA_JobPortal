import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { UserStatusEnum } from "src/app/common/enums/user-status.enum";
import { UserTypeEnum } from "src/app/common/enums/user-type-enum.enum";
import { DateUtils } from "src/app/common/utils/DateUtils";
import { BasicResponseDto } from "src/app/models/function-model/BasicResponseDto.model";
import { RegisterUserDto } from "src/app/models/function-model/user/RegisterUserDto.model";
import { getEmployerDetailsInstance } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { getJobseekerDetailsInstance } from "src/app/models/view-model/user/JobseekerDetailsDto.model";
import { getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

    //#region Variables

    protected userFormGroup: FormGroup;
    protected jobseekerFormGroup: FormGroup;
    protected employerFormGroup: FormGroup;
    protected userType: UserTypeEnum = UserTypeEnum.JOBSEEKER;
    protected userTypeEnum: typeof UserTypeEnum = UserTypeEnum;
    protected genderItems: string[] = [
        "Male",
        "Female"
    ];
    protected industryTypeItems: { id: string, name: string; }[] = [
        { id: "indType101", name: "Transport" },
        { id: "indType102", name: "Aerospace" },
        { id: "indType103", name: "Agriculture" },
        { id: "indType104", name: "Computer" },
        { id: "indType105", name: "Telecommunication" },
    ];
    protected dateFormat: string = DateUtils.getDateFormat();

    //#endregion

    //#region Page Load

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _userService: UserService,
    ) {

    }

    ngOnInit(): void {
        this.userType = this._activatedRoute.snapshot.params["userType"] as UserTypeEnum;

        this.initializeFormGroup();
    }

    //#endregion

    //#region Private Functions

    private initializeFormGroup(): void {
        this.userFormGroup = this._fb.group({
            ...getUserInfoInstance(),
        });
        this.jobseekerFormGroup = this._fb.group({
            ...getJobseekerDetailsInstance()
        });
        this.employerFormGroup = this._fb.group({
            ...getEmployerDetailsInstance()
        });

        this.userFormGroup.addControl("dob", new FormControl(new Date()));
        this.userFormGroup.get("user_name")?.addValidators([Validators.required]);
        this.userFormGroup.get("password")?.addValidators([Validators.required]);
    }

    private validateData(): boolean {
        let errorMsg: string = "";
        try {
            if (this.userFormGroup.value.user_name.trim() == "")
                errorMsg += "Username is required. \n";
            if (this.userFormGroup.value.password.trim() == "")
                errorMsg += "Password is required. \n";
            if (!this.userFormGroup.valid || errorMsg.length > 0) {
                console.log(this.userFormGroup)
                alert("Form Validation Failed. \n" + errorMsg);
                return false;
            }
        } catch (e) {
            alert("Form Validation Failed. \n" + errorMsg);
            return false;
        }
        return true;
    }

    //#endregion

    //#region Component Functions

    protected onIndustryTypeChange(dataItem: {id: string, name: string}): void {
        this.employerFormGroup.get("industry_id")?.setValue(dataItem.id);
    }

    protected onSubmitClick(): void {
        if (this.validateData()) {
            this.userFormGroup.get("dob_num_date")?.setValue(DateUtils.getNumDateFromDateObj(this.userFormGroup.value.dob));
            this.userFormGroup.get("user_type")?.setValue(this.userType);
            this.userFormGroup.get("user_status")?.setValue(UserStatusEnum.ACTIVE);
            let registerUser: RegisterUserDto = {
                userInfo: this.userFormGroup.value,
                jobseekerDetails: this.jobseekerFormGroup.value,
                employerDetails: this.employerFormGroup.value
            };

            this.registerUser(registerUser);
        }
    }

    protected onSignUpClick(): void {
        this._router.navigate(["login/" + NavigationPageEnum.Registration])
    }

    protected backToLoginClick(): void {
        this._router.navigate(["login/"])
    }

    //#endregion

    //#region Api Functions

    private registerUser(registerUser: RegisterUserDto): void {
        this._userService
            .registerUser(registerUser)
            .subscribe((response: BasicResponseDto) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    alert("User successfully resgistered");
                } else
                    alert("Failed to register user. " + response?.Message);
            });
    }

    //#endregion

}

