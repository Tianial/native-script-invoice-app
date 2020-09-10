import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpClientModule} from "@nativescript/angular";

import {AppComponent} from "./app.component";
import {StackComponent} from './layouts/stack/stack.component';
import {FlexboxComponent} from './layouts/flexbox/flexbox.component';
import {GridComponent} from './layouts/grid/grid.component';
import {AbsoluteComponent} from './layouts/absolute/absolute.component';
import {ChatListComponent} from './chat/chat-list/chat-list.component';
import {ChatDetailComponent} from './chat/chat-detail/chat-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { TabsListComponent } from './tabs-list/tabs-list.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsDetailComponent } from './settings-detail/settings-detail.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { UserComponent } from './user/user.component';
import { TaxesComponent } from './taxes/taxes.component';
import { ItemsComponent } from './items/items.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BusinessinfoDetailComponent } from './businessinfo-detail/businessinfo-detail.component';
import { CustomerinfoDetailComponent } from './customerinfo-detail/customerinfo-detail.component';
import { IncominginvoiceDetailComponent } from './incominginvoice-detail/incominginvoice-detail.component';
import { OutgoinginvoiceDetailComponent } from './outgoinginvoice-detail/outgoinginvoice-detail.component';

@NgModule({
    bootstrap: [
        AppComponent // First opened and presented component
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule // Import Routing module
    ],
    declarations: [
        AppComponent,
        ChatListComponent,
        ChatDetailComponent,
        HomeComponent,
        TabsListComponent,
        ReportComponent,
        SettingsComponent,
        SettingsDetailComponent,
        ReportDetailComponent,
        UserComponent,
        TaxesComponent,
        ItemsComponent,
        ChangePasswordComponent,
        BusinessinfoDetailComponent,
        CustomerinfoDetailComponent,
        IncominginvoiceDetailComponent,
        OutgoinginvoiceDetailComponent,
        /*
        StackComponent,
        FlexboxComponent,
        GridComponent,
        AbsoluteComponent,

         */

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
