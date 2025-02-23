import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppSettingsDto, getAppSettingsInstance } from "src/app/models/common-models/AppSettingsDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class AppSettingsService {

    //#region Variables

    //#endregion

    constructor(
        
    ) {

    }

    //#region App Settings retrieval and setting

    public setAppSettingsData(appSettings: AppSettingsDto): void {
        sessionStorage.setItem(app_settings_enum.AppSettings,JSON.stringify(appSettings));
    }

    public getAppSettingsData(): AppSettingsDto {
        let appSettings: AppSettingsDto = { ...getAppSettingsInstance() };
        let data: string | null = sessionStorage.getItem(app_settings_enum.AppSettings);

        if(data)
            appSettings = JSON.parse(data);

        return appSettings;
    }

    public clearAppSettingsData(): void {
        sessionStorage.clear();
    }

    //#endregion

}

const enum app_settings_enum {
    AppSettings = "AppSettings",
}