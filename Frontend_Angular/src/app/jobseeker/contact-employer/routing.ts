import { Routes } from "@angular/router";
import { EmployerListComponent } from "./employer-list/employer-list.component";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { ManageChatComponent } from "./manage-chat/manage-chat.component";

export const JOBSEEKER_CONTACT_EMPLOYER_ROUTING: Routes = [
    { path: NavigationPageEnum.EmployerList, component: EmployerListComponent, },
    { path: `${NavigationPageEnum.ManageChat}/:employer_user_id`, component: ManageChatComponent, },    
];