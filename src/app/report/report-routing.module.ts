import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from '@nativescript/angular';
import {ReportComponent} from "./report.component";
import {ReportDetailComponent} from "../report-detail/report-detail.component";

const routes: Routes = [
    {path: 'report-detail', component: ReportDetailComponent},
    {path: '', component: ReportComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ReportRoutingModule {
}
