import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-tabs-list',
  templateUrl: './tabs-list.component.html',
  styleUrls: ['./tabs-list.component.css']
})
export class TabsListComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onSelectedIndexchanged(tapIndex: any) {
        console.log('event: ', tapIndex )
    }
}
