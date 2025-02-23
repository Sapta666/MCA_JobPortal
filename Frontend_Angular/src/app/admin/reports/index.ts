import { EmployerReportComponent } from "./employer-report/employer-report.component";
import { JobseekerReportComponent } from "./jobseeker-report/jobseeker-report.component";
import { ReportTypesComponent } from "./report-types/report-types.component";
import { ViewEmployerJobPostsComponent } from "./view-employer-job-posts/view-employer-job-posts.component";
import { ViewEmployerProfileComponent } from "./view-employer-profile/view-employer-profile.component";
import { ViewJobseekerProfileComponent } from "./view-jobseeker-profile/view-jobseeker-profile.component";
import { ViewUserJobApplicationsListComponent } from "./view-user-job-applications/view-user-job-applications.component";

export const ADMIN_REPORTS = [
    ReportTypesComponent,
    EmployerReportComponent,
    JobseekerReportComponent,
    ViewEmployerProfileComponent,
    ViewEmployerJobPostsComponent,
    ViewJobseekerProfileComponent,
    ViewUserJobApplicationsListComponent,
];