import { NgModule } from '@angular/core';
import { EmployerRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { HlpTktListComponent } from './help-ticket/hlp_tkt_list/hlp-tkt-ist.component';
import { ManageHelpTicketComponent } from './help-ticket/manage-help-ticket/manage-help-ticket.component';
import { ADMIN_REPORTS } from './reports';


@NgModule({
  declarations: [
    AdminComponent,    
    AdminDashboardComponent,
    HlpTktListComponent,
    ManageHelpTicketComponent,

    ...ADMIN_REPORTS,
  ],
  imports: [    
    EmployerRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class AdminModule { }
