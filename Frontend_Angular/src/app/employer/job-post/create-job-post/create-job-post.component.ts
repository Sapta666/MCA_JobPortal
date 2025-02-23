import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { NavigationPageEnum } from 'src/app/common/enums/navigation-page.enum';
import { DateUtils } from 'src/app/common/utils/DateUtils';
import { AppSettingsDto } from 'src/app/models/common-models/AppSettingsDto.model';
import { BasicResponseDto } from 'src/app/models/function-model/BasicResponseDto.model';
import { CreateJobPostsDto, getCreateJobPostsInstance } from 'src/app/models/function-model/job-posts/CreateJobPostsDto.model';
import { AppSettingsService } from 'src/app/services/common/app-settings.service';
import { JobPostService } from 'src/app/services/job-post.service';

@Component({
    selector: 'app-create-job-post',
    templateUrl: './create-job-post.component.html'
})
export class CreateJobPostComponent implements OnInit {

    //#region Variables

    private _appSettings: AppSettingsDto;

    protected formGroup: FormGroup;

    protected industryTypeItems: { id: string, name: string; }[] = [
        { id: "indType101", name: "Transport" },
        { id: "indType102", name: "Aerospace" },
        { id: "indType103", name: "Agriculture" },
        { id: "indType104", name: "Computer" },
        { id: "indType105", name: "Telecommunication" },
    ];
    protected dateFormat: string = DateUtils.getDateFormat();

    public jobTypeItems: { id: string, name: string }[] = [
        { id: "jobType001", name: "Architecture" },
        { id: "jobType002", name: "Arts" },
        { id: "jobType003", name: "Agriculture" },
        { id: "jobType004", name: "Education" },
        { id: "jobType005", name: "Medical" },
        { id: "jobType006", name: "Information" },
        { id: "jobType007", name: "Technology" },
    ];

    //#endregion

    //#region Page Load

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _appSettingsService: AppSettingsService,
        private _jobPostService: JobPostService,
    ) {
        this._appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        this.initializeFormGroup();
    }

    //#endregion

    //#region Private Functions

    private initializeFormGroup(): void {
        this.formGroup = this._fb.group({
            ...getCreateJobPostsInstance()
        });

        this.formGroup.get("employer_id")?.setValue(this._appSettings.employer_id);
        this.formGroup.get("industry_id")?.setValue(this.industryTypeItems[0].id);
        this.formGroup.get("job_type_id")?.setValue(this.jobTypeItems[0].id);

        this.formGroup.addControl("chkhas_pre_application_data",new FormControl(false));

        this.formGroup.get("topic")?.addValidators([Validators.required]);

        this.formGroup.addControl("job_start_date", new FormControl(new Date()));
        this.formGroup.addControl("job_end_date", new FormControl(new Date()));        

    }

    private validateData(): boolean {
        let errorMessage: string = "";        
        try {
            if (this.formGroup.get("topic")?.value?.trim() == "")
                errorMessage += "\n Topic is required";
            if(DateUtils.getNumDateFromDateObj(this.formGroup.value.job_start_date) > DateUtils.getNumDateFromDateObj(this.formGroup.value.job_end_date))
                errorMessage += "\n Start date cannot be greater than end date";

            if (errorMessage.length > 0 || this.formGroup.invalid) {
                alert(errorMessage);
                return false;
            }

        } catch (e) {
            console.error(e);
            return false;
        }

        return true;
    }

    //#endregion

    //#region Combo Functions

    protected onIndustryTypeChange(industry: { id: string; value: string; }): void {
        this.formGroup.get("industry_id")?.setValue(industry.id);
    }

    protected onJobTypeChange(jobType: { id: string; value: string }): void {
        this.formGroup.get("job_type_id")?.setValue(jobType.id);
    }

    //#endregion

    //#region Component Functions

    protected onSubmitClick(): void {
        this.formGroup.get("has_pre_application_data")?.setValue(this.formGroup.get("chkhas_pre_application_data")?.value ? 'Y' : 'N');

        if (this.validateData()) {
            this.formGroup.get("job_start_num_date")?.setValue(DateUtils.getNumDateFromDateObj(this.formGroup.value.job_start_date));
            this.formGroup.get("job_end_num_date")?.setValue(DateUtils.getNumDateFromDateObj(this.formGroup.value.job_end_date));

            this.formGroup.removeControl("job_start_date");
            this.formGroup.removeControl("job_end_date");

            let createJobPost: CreateJobPostsDto = {
                ...this.formGroup.getRawValue()
            };

            this.postJob(createJobPost);
        }
    }

    protected onCancelClick(): void {
        this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`]);
    }

    //#endregion

    //#region Api Functions

    private postJob(createJobPost: CreateJobPostsDto): void {
        this._jobPostService
            .postJob(createJobPost)
            .subscribe((response: BasicResponseDto) => {
                if (response?.Status?.toUpperCase() == "SUCCESS")
                    this._router.navigate([`employer/${NavigationPageEnum.EmployerDashboard}`]);
                else
                    alert("Failed post job. " + response?.Message);
            });
    }

    //#endregion

}

