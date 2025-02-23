import { NgModule } from '@angular/core';

import { JobseekerComponent } from './jobseeker.component';
import { SharedModule } from '../shared/shared.module';
import { JobseekerRoutingModule } from './jobseeker-routing.module';
import { JOBSEEKER_SUPPORT } from './support';
import { JobseekerDashboardComponent } from './dashboard/jobseeker-dashboard.component';
import { JOBSEEKER_JOBS } from './jobs';
import { JOBSEEKER_PROFILE } from './profile';
import { JOBSEEKER_CONTACT_EMPLOYER } from './contact-employer';


@NgModule({
  declarations: [
    JobseekerComponent,
    JobseekerDashboardComponent,

    ...JOBSEEKER_JOBS,
    ...JOBSEEKER_PROFILE,
    ...JOBSEEKER_SUPPORT,
    ...JOBSEEKER_CONTACT_EMPLOYER,
  ],
  imports: [
    JobseekerRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: []
})
export class JobseekerModule { }
