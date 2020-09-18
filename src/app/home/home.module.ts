import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {NativeScriptCommonModule} from '@nativescript/angular';
import {BusinessinfoDetailComponent} from "../businessinfo-detail/businessinfo-detail.component";
import {CustomerinfoDetailComponent} from "../customerinfo-detail/customerinfo-detail.component";
import {IncominginvoiceDetailComponent} from "../incominginvoice-detail/incominginvoice-detail.component";
import {OutgoinginvoiceDetailComponent} from "../outgoinginvoice-detail/outgoinginvoice-detail.component";
import {CreateAccountComponent} from "../create-account/create-account.component";
import {ChatListComponent} from "../chat/chat-list/chat-list.component";
import {ChatDetailComponent} from "../chat/chat-detail/chat-detail.component";
import {HomeComponent} from "./home.component";


@NgModule({
    declarations: [
        HomeComponent,

        BusinessinfoDetailComponent,
        CustomerinfoDetailComponent,
        IncominginvoiceDetailComponent,
        OutgoinginvoiceDetailComponent,
        CreateAccountComponent,

        ChatListComponent,
        ChatDetailComponent
    ],
    imports: [
        HomeRoutingModule,
        NativeScriptCommonModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
