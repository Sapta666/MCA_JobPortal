import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavigationPageEnum } from '../common/enums/navigation-page.enum';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { HlpTktListComponent } from './help-ticket/hlp_tkt_list/hlp-tkt-ist.component';
import { ManageHelpTicketComponent } from './help-ticket/manage-help-ticket/manage-help-ticket.component';
import { ADMIN_REPORTS_ROUTING } from './reports/routing';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', pathMatch: "full",redirectTo: NavigationPageEnum.AdminDashboard },

      { path: NavigationPageEnum.AdminDashboard, component: AdminDashboardComponent },
      { path: NavigationPageEnum.HlpTktList, component: HlpTktListComponent },      
      { path: `${NavigationPageEnum.ManageHelpTicket}/:hlp_tkt_id`, component: ManageHelpTicketComponent },            

      ...ADMIN_REPORTS_ROUTING,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
