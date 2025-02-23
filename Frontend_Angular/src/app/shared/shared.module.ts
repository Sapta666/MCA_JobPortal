import { NgModule } from '@angular/core';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SHARED_COMPONENTS } from './components';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { UploadsModule } from '@progress/kendo-angular-upload';


const modules = [
  InputsModule,
  ButtonsModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  DialogsModule,
  DropDownsModule,
  DateInputsModule,
  LayoutModule,
  GridModule,
  UploadsModule
]

const components: any = [
  ...SHARED_COMPONENTS,
];


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...modules,
    ...components
  ],
  providers: [],
})
export class SharedModule { }
