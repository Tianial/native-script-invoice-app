import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from '@nativescript/angular';
import {BusinessinfoDetailComponent} from "../businessinfo-detail/businessinfo-detail.component";
import {CustomerinfoDetailComponent} from "../customerinfo-detail/customerinfo-detail.component";
import {IncominginvoiceDetailComponent} from "../incominginvoice-detail/incominginvoice-detail.component";
import {OutgoinginvoiceDetailComponent} from "../outgoinginvoice-detail/outgoinginvoice-detail.component";
import {ChatListComponent} from "../chat/chat-list/chat-list.component";
import {ChatDetailComponent} from "../chat/chat-detail/chat-detail.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [


    {path: "businessinfo-detail", component: BusinessinfoDetailComponent},
    {path: "customerinfo-detail", component: CustomerinfoDetailComponent},
    {path: "incominginvoice-detail", component: IncominginvoiceDetailComponent},
    {path: "outgoinginvoice-detail", component: OutgoinginvoiceDetailComponent},

    {path: 'chat-list', component: ChatListComponent},
    {path: 'chat-detail/:index', component: ChatDetailComponent},

    {path: '', component: HomeComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
