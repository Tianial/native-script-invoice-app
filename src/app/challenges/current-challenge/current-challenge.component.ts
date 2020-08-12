
import { Component, OnInit, Input } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view'

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css']
})
export class CurrentChallengeComponent implements OnInit {

    @Input() public challenges: Array<string> = [];

    constructor() { }

    public ngOnInit(): void { }

    public onItemTap(args: ItemEventData): void {
        console.log(args);
    }

}
