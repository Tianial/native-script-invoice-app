import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import {SettingsDetailComponent} from "../settings-detail/settings-detail.component";
import {SettingsComponent} from "./settings.component";


@NgModule({
  declarations: [
      SettingsDetailComponent,
      SettingsComponent
  ],
  imports: [
    SettingsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule { }
