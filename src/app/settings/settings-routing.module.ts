import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import {SettingsComponent} from "./settings.component";
import {SettingsDetailComponent} from "../settings-detail/settings-detail.component";

const routes: Routes = [
    {path:'settings-detail', component:SettingsDetailComponent},
    {path:'', component:SettingsComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
