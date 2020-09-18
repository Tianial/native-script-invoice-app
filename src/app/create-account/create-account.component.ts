import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
    isBusy: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
