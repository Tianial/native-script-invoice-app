import { Component, OnInit } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { EventData } from "tns-core-modules/data/observable";

@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public years: Array<number> = [1980, 1990, 2000, 2010, 2020];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
