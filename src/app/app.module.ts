import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpClientModule } from "@nativescript/angular";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { StackComponent } from './layouts/stack/stack.component';
import { FlexboxComponent } from './layouts/flexbox/flexbox.component';
import { GridComponent } from './layouts/grid/grid.component';
import { AbsoluteComponent } from './layouts/absolute/absolute.component';
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
//        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent,
        FlexboxComponent,
        GridComponent,
        AbsoluteComponent,
        ChallengeEditComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
