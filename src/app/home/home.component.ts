import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    icon = String.fromCharCode(0xf015);

  constructor() { }

  ngOnInit(): void {
  }

}
