import { Routes } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { SearchJobComponent } from "./search-job/search-job.component";
import { ViewJobComponent } from "./view-job/view-job.component";

export const JOBSEEKER_JOBS_ROUTING: Routes = [
    { path: NavigationPageEnum.SearchJob, component: SearchJobComponent },
    { path: NavigationPageEnum.ViewJob+"/:job_post_id", component: ViewJobComponent },
]