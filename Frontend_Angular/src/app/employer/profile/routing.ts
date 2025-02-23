import { Routes } from "@angular/router";
import { EditEmployerProfileComponent } from "./edit-employer-profile/edit-employer-profile.component";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";

export const EMPLOYER_PROFILE_ROUTING: Routes = [
    { path: NavigationPageEnum.EditEmployerProfile, component: EditEmployerProfileComponent },
];