import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ns-customerinfo-detail',
  templateUrl: './customerinfo-detail.component.html',
  styleUrls: ['./customerinfo-detail.component.css']
})
export class CustomerinfoDetailComponent implements OnInit {
    isBusy: boolean;
    firstName: string;
    lastName: string;
    placeOfbirth: String;
    origin: string;
    emailadress: string;
    married: boolean;
    dateofbirth: Date;

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.isBusy = false;
  }

    next() {
            this.isBusy = true;
            const form = {
                firstname: this.firstName,
                lastName: this.lastName,
                placeOfbirth: this.placeOfbirth,
                dateofbirth: this.dateofbirth,
                origin: this.origin,
                emailadress: this.emailadress,
                married: this.married

            }
            console.log({form});

        const callback = () => {
            this.isBusy = false;
            this.router.navigate(['/businessinfo-detail']);
        };
        setTimeout(callback, 5000);
    }

}
