import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {TabsListRoutingModule} from './tabs-list-routing.module';
import {NativeScriptCommonModule} from '@nativescript/angular';
import {TabsListComponent} from "./tabs-list.component";


@NgModule({
    declarations: [
        TabsListComponent
    ],
    imports: [
        TabsListRoutingModule,
        NativeScriptCommonModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsListModule {
}
