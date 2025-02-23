import { Routes } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { EditJobseekerProfileComponent } from "./edit-jobseeker-profile/edit-jobseeker-profile.component";
import { UploadResumeComponent } from "./upload-resume/upload-resume.component";

export const JOBSEEKER_PROFILE_ROUTING: Routes = [
    { path: NavigationPageEnum.EditJobseekerProfile, component: EditJobseekerProfileComponent },
    { path: NavigationPageEnum.UploadResume, component: UploadResumeComponent },    
];