import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOB_POST_ROUTING } from './job-post/routing';
import { EmployerComponent } from './employer.component';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { EmployerDashboardComponent } from './dashboard/employer-dashboard.component';
import { EMPLOYER_PROFILE_ROUTING } from './profile/routing';
import { EMPLOYER_SUPPORT_ROUTING } from './support/routing';
import { EMPLOYER_CONTACT_JOBSEEKER_ROUTING } from './contact-jobseeker/routing';

const routes: Routes = [
  {
    path: '', component: EmployerComponent, children: [
      { path: '', pathMatch: "full",redirectTo: NavigationPageEnum.JobseekerDashboard },

      { path: NavigationPageEnum.EmployerDashboard, component: EmployerDashboardComponent },

      ...JOB_POST_ROUTING,
      ...EMPLOYER_PROFILE_ROUTING,
      ...EMPLOYER_SUPPORT_ROUTING,
      ...EMPLOYER_CONTACT_JOBSEEKER_ROUTING,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
