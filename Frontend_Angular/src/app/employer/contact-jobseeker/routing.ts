import { Routes } from "@angular/router";
import { JobseekerListComponent } from "./jobseeker-list/jobseeker-list.component";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { ManageJobseekerChatComponent } from "./manage-jobseeker-chat/manage-jobseeker-chat.component";

export const EMPLOYER_CONTACT_JOBSEEKER_ROUTING: Routes = [
    { path: NavigationPageEnum.JobseekerList, component: JobseekerListComponent, },
    { path: `${NavigationPageEnum.ManageJobseekerChat}/:jobseeker_user_id`, component: ManageJobseekerChatComponent, },    
];