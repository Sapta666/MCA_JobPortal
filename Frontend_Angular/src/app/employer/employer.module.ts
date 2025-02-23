import { NgModule } from '@angular/core';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SharedModule } from '../shared/shared.module';
import { JOB_POST } from './job-post';
import { EmployerDashboardComponent } from './dashboard/employer-dashboard.component';
import { EMPLOYER_PROFILE } from './profile';
import { EMPLOYER_SUPPORT } from './support';
import { EMPLOYER_CONTACT_JOBSEEKER } from './contact-jobseeker/index';


@NgModule({
  declarations: [
    EmployerComponent,    
    EmployerDashboardComponent,

    ...JOB_POST,
    ...EMPLOYER_PROFILE,
    ...EMPLOYER_SUPPORT,
    ...EMPLOYER_CONTACT_JOBSEEKER,
  ],
  imports: [    
    EmployerRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class EmployerModule { }
