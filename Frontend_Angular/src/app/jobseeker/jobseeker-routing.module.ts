import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOBSEEKER_SUPPORT_ROUTING } from './support/routing';
import { JobseekerComponent } from './jobseeker.component';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { JobseekerDashboardComponent } from './dashboard/jobseeker-dashboard.component';
import { JOBSEEKER_JOBS_ROUTING } from './jobs/routing';
import { JOBSEEKER_PROFILE_ROUTING } from './profile/routing';
import { JOBSEEKER_CONTACT_EMPLOYER_ROUTING } from './contact-employer/routing';

const routes: Routes = [
  {
    path: '', component: JobseekerComponent, children: [

      { path: '', pathMatch: "full", redirectTo: NavigationPageEnum.JobseekerDashboard },
      { path: NavigationPageEnum.JobseekerDashboard, component: JobseekerDashboardComponent },

      ...JOBSEEKER_JOBS_ROUTING,
      ...JOBSEEKER_PROFILE_ROUTING,
      ...JOBSEEKER_SUPPORT_ROUTING,
      ...JOBSEEKER_CONTACT_EMPLOYER_ROUTING,
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekerRoutingModule { }
