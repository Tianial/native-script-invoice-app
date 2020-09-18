import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule
} from "@nativescript/angular";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {ReportComponent} from './report/report.component';
import {SettingsComponent} from './settings/settings.component';
import {SettingsDetailComponent} from './settings-detail/settings-detail.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {UserComponent} from './user/user.component';
import {TaxesComponent} from './taxes/taxes.component';
import {ItemsComponent} from './items/items.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

@NgModule({
    bootstrap: [
        AppComponent // First opened and presented component
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        NativeScriptRouterModule
        // Import Routing module
    ],
    declarations: [
        AppComponent,
        ReportComponent,
        SettingsComponent,
        SettingsDetailComponent,
        ReportDetailComponent,
        UserComponent,
        TaxesComponent,
        ItemsComponent,
        ChangePasswordComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}
