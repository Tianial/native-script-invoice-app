import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule, NSEmptyOutletComponent} from "@nativescript/angular";
import {TabsListComponent} from "./tabs-list/tabs-list.component";
import {ReportDetailComponent} from "./report-detail/report-detail.component";
import {SettingsDetailComponent} from "./settings-detail/settings-detail.component";
import {UserComponent} from "./user/user.component";
import {ItemsComponent} from "./items/items.component";
import {TaxesComponent} from "./taxes/taxes.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {CreateAccountComponent} from "./create-account/create-account.component";


/**
 * Defines routes for navigation
 */
const routes: Routes = [
    {
        path: "tab-list",
        component: TabsListComponent
    },
    {
        path: 'report-detail',
        outlet: "reportTab",
        component: ReportDetailComponent
    },
    {
        path: 'settings-detail',
        outlet: "settingsTab",
        component: SettingsDetailComponent
    },
    {path: 'user', component: UserComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'taxes', component: TaxesComponent},
    {path: 'items', component: ItemsComponent},
    { path: "", redirectTo: "tab-list", pathMatch: "full" }

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
