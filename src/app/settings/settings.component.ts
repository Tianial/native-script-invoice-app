import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


interface Setting {
    label: string;
    route: string;
}

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


    public settingsList: Setting[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.settingsList= [
          {label:'Change Password', route: '/change-password'},
          {label:'Users', route: '/user'},
          {label:'Taxes', route: '/taxes'},
          {label:'Items', route: '/items'}
      ];
      console.log(this.route.snapshot.params)

  }

}
