import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginCredDto } from "src/app/models/function-model/login/LoginCredDto.model";
import { BasicResponseDto } from "../models/function-model/BasicResponseDto.model";
import { AppSettingsDto } from "../models/common-models/AppSettingsDto.model";
import { ResponseDataDto } from "../models/function-model/ResponseDataDto.model";

@Injectable({ 
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private _http: HttpClient
    ) {

    }

    public validateLogin(loginCred: LoginCredDto): Observable<ResponseDataDto<AppSettingsDto>> {
        return this._http.post<ResponseDataDto<AppSettingsDto>>(`{{baseUrl}}/auth/login`,loginCred);
    }

}