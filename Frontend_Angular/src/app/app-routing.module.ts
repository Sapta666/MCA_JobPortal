import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // For Development , to be removed after its completion
  
  // { path: '', redirectTo: 'jobseeker/FileJobseekerHelpTicket', pathMatch: "full" },

  //////////////////////////////////


  { path: '', redirectTo: 'login', pathMatch: "full" },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'jobseeker',
    loadChildren: () => import('./jobseeker/jobseeker.module').then(m => m.JobseekerModule)
  },
  {
    path: 'employer',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
