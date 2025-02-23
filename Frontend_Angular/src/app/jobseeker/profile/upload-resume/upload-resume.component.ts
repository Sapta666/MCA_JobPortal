import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { BasicResponseDto } from "src/app/models/function-model/BasicResponseDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { FileUploadDto, getFileUploadInstance } from "src/app/models/function-model/user/FileUploadDto.model";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-upload-resume',
    templateUrl: './upload-resume.component.html'
})
export class UploadResumeComponent implements OnInit, AfterViewInit {

    //#region Variables

    protected appSettings: AppSettingsDto;

    private _file: File = null;
    private _userResumeBase64: string = "";

    protected showDownload: boolean = false;
    protected totalHeight: number = 500;

    //#endregion

    //#region Page Load

    constructor(
        private _router: Router,
        private _appSettingsService: AppSettingsService,
        private _userService: UserService,
    ) {
        this.appSettings = this._appSettingsService.getAppSettingsData();
    }

    ngOnInit(): void {
        this.getUserResume();
    }

    ngAfterViewInit(): void {
        this.totalHeight = window.innerHeight - 130;
    }

    @HostListener("window.resize", ["$event"])
    protected onResize(): void {
        this.totalHeight = window.innerHeight - 130;
    }

    //#endregion

    //#region Private Functions

    private createFile(): void {
        this.showDownload = true;

        setTimeout(() => {
            let anchor: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("download");
            anchor.href = "data:application/pdf;base64,"+this._userResumeBase64;
            anchor.download = "resume.pdf";
        },200);

        
    }

    //#endregion

    //#region Component Functions

    protected onFileSelectValueChange(data: File[]): void {
        this._file = data.length > 0
            ? data[0]
            : null;
    }

    protected onSubmitClick(): void {
        if (this._file) {            
            let currObj = this;
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this._file);
            fileReader.onload = () => {
                let bs64WithMIMEType: string = <string>fileReader.result;
                let startIndex: number = bs64WithMIMEType.indexOf("base64") + 7;
                let mimeType: string = bs64WithMIMEType.slice(0, startIndex);                
                let bs64 = bs64WithMIMEType.replace(mimeType, "");

                let fileUpload: FileUploadDto = {
                    user_id: this.appSettings.user_id,
                    base64: bs64,
                    extension: (this._file.name.split('.').length > 0)
                        ? this._file.name.split('.')[this._file.name.split('.').length - 1]
                        : "txt",
                    fileName: this._file.name,
                }
                currObj.uploadResume(fileUpload);
            };

        }
        else
            alert("no file selected");
    }

    //#endregion

    //#region Api Functions

    private getUserResume(): void {
        this._userService
            .getUserResume(this.appSettings.user_id)
            .subscribe((response: ResponseDataDto<string>) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    this._userResumeBase64 = response?.Data;
                    if (this._userResumeBase64?.length > 0)
                        this.createFile();
                } else
                    alert("Failed to get data. " + response?.Message);
            });
    }

    private uploadResume(fileUpload: FileUploadDto): void {
        this._userService
            .uploadResume(fileUpload)
            .subscribe((response: BasicResponseDto) => {
                if (response?.Status?.toUpperCase() == "SUCCESS") {
                    alert("Success");
                    this.getUserResume();
                } else
                    alert("Failed to get data. " + response?.Message);
            });
    }

    //#endregion

}