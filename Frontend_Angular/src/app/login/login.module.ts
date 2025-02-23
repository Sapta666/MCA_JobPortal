import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class LoginModule { }
