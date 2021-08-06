import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {ActivatedRoute} from "@angular/router";
import {Page} from "@nativescript/core";


@Component({
    selector: 'ns-tabs-list',
    templateUrl: './tabs-list.component.html',
    styleUrls: ['./tabs-list.component.css']
})
export class TabsListComponent implements OnInit {

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
        private page:Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.routerExtension.navigate([
            {
                outlets: {
                    homeOutlet: ["homeTab"],
                    reportOutlet: ["reportTab"],
                    settingsOutlet:["settingsTab"]
                }
            }
        ], {relativeTo: this.activeRoute});
    }

    onSelectedIndexchanged(tapIndex: any) {
    }
}
