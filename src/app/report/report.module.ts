import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ReportRoutingModule } from './report-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import {ReportComponent} from "./report.component";
import {ReportDetailComponent} from "../report-detail/report-detail.component";


@NgModule({
  declarations: [
      ReportComponent,
      ReportDetailComponent
  ],
  imports: [
    ReportRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ReportModule { }
