import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule, NSEmptyOutletComponent,} from '@nativescript/angular';
import {TabsListComponent} from "./tabs-list.component";
import {HomeComponent} from "../home/home.component";
import {buildDefaultPath} from "@schematics/angular/utility/workspace.d";

const routes: Routes = [
    {
        path: "default",
        component: TabsListComponent,
        children: [
            {
                path: "homeTab",
                outlet: "homeOutlet",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
            },
            {
                path: "reportTab",
                outlet: "reportOutlet",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../report/report.module").then(m => m.ReportModule)
            },
            {
                path:"settingsTab",
                outlet:"settingsOutlet",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../settings/settings.module").then(m => m.SettingsModule)

            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsListRoutingModule {
}
