import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "@nativescript/angular";
import {HomeComponent} from "./home/home.component";
import {ChatListComponent} from "./chat/chat-list/chat-list.component";


/**
 * Defines routes for navigation
 */
const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: 'chat-listx', component: ChatListComponent}
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
