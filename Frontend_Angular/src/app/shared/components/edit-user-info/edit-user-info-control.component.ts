import { AfterContentInit, Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DateUtils } from "src/app/common/utils/DateUtils";
import { UserInfoDto, getUserInfoInstance } from "src/app/models/view-model/user/UserInfoDto.model";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-edit-user-info-control',
    templateUrl: './edit-user-info-control.component.html'
})
export class EditUserInfoControlComponent implements OnInit, AfterContentInit {

    //#region Variables

    protected userFormGroup: FormGroup;
    protected genderItems: string[] = [
        "Male",
        "Female"
    ];
    protected dateFormat: string = DateUtils.getDateFormat();
    protected userInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };

    //#endregion

    //#region Properties

    @Input() pUserInfo: UserInfoDto = {
        ...getUserInfoInstance()
    };
    @Input() pForView: boolean = false;

    //#endregion

    //#region Page Load

    constructor(
        private _fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.initializeFormGroup();
    }

    ngAfterContentInit(): void {

    }

    //#endregion

    //#region Public Functions

    public loadControl(): void {
        this.userInfo = this.pUserInfo;

        this.initializeFormGroupValue();
    }

    public getUserUserInfoResult(): UserInfoDto {
        
        return this.userFormGroup.getRawValue();
    }

    //#endregion

    //#region Private Functions

    private initializeFormGroup(): void {
        this.userFormGroup = this._fb.group({
            ...getUserInfoInstance(),
        });
        this.userFormGroup.addControl("dob", new FormControl(new Date()));
    }

    private initializeFormGroupValue(): void {
        this.userFormGroup.patchValue({
            ...this.userInfo
        });
    }

    //#endregion

    //#region Component Functions

    //#endregion

}

