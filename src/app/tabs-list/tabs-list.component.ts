import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ns-tabs-list',
    templateUrl: './tabs-list.component.html',
    styleUrls: ['./tabs-list.component.css']
})
export class TabsListComponent implements OnInit {

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.routerExtension.navigate(
            [{ outlets: { homeTab: "home"}}], { relativeTo: this.activeRoute });
        /*
        console.log('WOOOOOOOOO');
        this.routerExtension.navigate(
            [{outlets: {homeTab: ["home"]}}],
            {relativeTo: this.activeRoute}
        )
            .then(() => console.log('YOOOOO'))
            .catch(() => console.log('NOOOOOONNN'));

         */
        console.log('WOOOOOOOOO', {route: this.activeRoute.snapshot});
        this.routerExtension.navigate(['/tab-list/home']);
    }

    onSelectedIndexchanged(tapIndex: any) {
    }
}
