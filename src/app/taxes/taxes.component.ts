import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface Names{
    name:string;
    rate: number;
}

@Component({
  selector: 'ns-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
    public selectedName:Names
public nameList:Names[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.nameList=[
          {name:'Tiani', rate: 15},
          {name:'Ezra', rate: 10},
          {name:'sara', rate: 5},
          {name:'Monthe', rate: 8},
          {name:'Lari', rate: 9},
          {name:'Alice', rate: 11}

      ];
      console.log(this.route.snapshot.params)

  }

}
