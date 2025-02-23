import { Routes } from "@angular/router";
import { ReportTypesComponent } from "./report-types/report-types.component";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { EmployerReportComponent } from "./employer-report/employer-report.component";
import { JobseekerReportComponent } from "./jobseeker-report/jobseeker-report.component";
import { ViewEmployerProfileComponent } from "./view-employer-profile/view-employer-profile.component";
import { ViewEmployerJobPostsComponent } from "./view-employer-job-posts/view-employer-job-posts.component";
import { ViewJobseekerProfileComponent } from "./view-jobseeker-profile/view-jobseeker-profile.component";
import { ViewUserJobApplicationsListComponent } from "./view-user-job-applications/view-user-job-applications.component";

export const ADMIN_REPORTS_ROUTING: Routes = [
    { path: NavigationPageEnum.ReportTypes, component: ReportTypesComponent },
    { path: NavigationPageEnum.EmployerReport, component: EmployerReportComponent },    
    { path: NavigationPageEnum.JobseekerReport, component: JobseekerReportComponent },        
    { path: `${NavigationPageEnum.ViewEmployerProfile}/:employer_user_id`, component: ViewEmployerProfileComponent },            
    { path: `${NavigationPageEnum.ViewEmployerJobPosts}/:employer_id`, component: ViewEmployerJobPostsComponent },                
    { path: `${NavigationPageEnum.ViewJobseekerProfile}/:jobseeker_user_id`, component: ViewJobseekerProfileComponent },                    
    { path: `${NavigationPageEnum.ViewUserJobApplicationsList}`, component: ViewUserJobApplicationsListComponent },                        
];