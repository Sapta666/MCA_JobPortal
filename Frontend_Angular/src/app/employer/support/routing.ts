import { Routes } from "@angular/router";
import { FileEmployerHelpTicketComponent } from "./file-employer-help-ticket/file-employer-help-ticket.component";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";


export const EMPLOYER_SUPPORT_ROUTING: Routes = [
    { path: NavigationPageEnum.FileEmployerHelpTicket ,component: FileEmployerHelpTicketComponent },
]