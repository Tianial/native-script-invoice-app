import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "@nativescript/angular";
import {HomeComponent} from "./home/home.component";
import {ChatListComponent} from "./chat/chat-list/chat-list.component";
import {ChatDetailComponent} from "./chat/chat-detail/chat-detail.component";
import {TabsListComponent} from "./tabs-list/tabs-list.component";
import {ReportDetailComponent} from "./report-detail/report-detail.component";
import {SettingsDetailComponent} from "./settings-detail/settings-detail.component";
import {UserComponent} from "./user/user.component";
import {ItemsComponent} from "./items/items.component";
import {TaxesComponent} from "./taxes/taxes.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {BusinessinfoDetailComponent} from "./businessinfo-detail/businessinfo-detail.component";
import {IncominginvoiceDetailComponent} from "./incominginvoice-detail/incominginvoice-detail.component";
import {OutgoinginvoiceDetailComponent} from "./outgoinginvoice-detail/outgoinginvoice-detail.component";
import {CustomerinfoDetailComponent} from "./customerinfo-detail/customerinfo-detail.component";


/**
 * Defines routes for navigation
 */
const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: 'chat-list', component: ChatListComponent},
    {path: 'chat-detail/:index', component: ChatDetailComponent},
    {path: 'tab-list', component: TabsListComponent},
    {path: "", redirectTo: "/tab-list", pathMatch: "full"},
    {path:'report-detail',component:ReportDetailComponent},
    {path:'settings-detail',component:SettingsDetailComponent},
    {path:'user',component:UserComponent},
    {path:'change-password',component:ChangePasswordComponent},
    {path:'taxes',component:TaxesComponent},
    {path:'items',component:ItemsComponent},
    {path:"businessinfo-detail",component:BusinessinfoDetailComponent},
    {path:"customerinfo-detail",component:CustomerinfoDetailComponent},
    {path:"incominginvoice-detail",component:IncominginvoiceDetailComponent},
    {path:"outgoinginvoice-detail",component:OutgoinginvoiceDetailComponent}
];

/**
 * Register routes in AppRoutingModule
 */
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
