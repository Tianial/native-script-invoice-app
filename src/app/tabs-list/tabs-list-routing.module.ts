import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule, NSEmptyOutletComponent} from '@nativescript/angular';
import {TabsListComponent} from "./tabs-list.component";

const routes: Routes = [
    {
        path: "",
        component: TabsListComponent,
        children: [
            {
                path: "home",
                outlet: "homeTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
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
