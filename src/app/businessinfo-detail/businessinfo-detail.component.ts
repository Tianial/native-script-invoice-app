import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'ns-businessinfo-detail',
    templateUrl: './businessinfo-detail.component.html',
    styleUrls: ['./businessinfo-detail.component.css']
})
export class BusinessinfoDetailComponent implements OnInit {

    public firstName: string;
    public lastName: string;
    public NameOfCompany: string;
    public isSarl: boolean;
    public selectedDate: Date;
    public isBusy: boolean;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.isBusy = false;
    }

    save() {
        this.isBusy = true;
        const form = {
            firstname: this.firstName,
            lastName: this.lastName,
            NameOfCompany: this.NameOfCompany,
            isSarl: this.isSarl,
            selectedDate: this.selectedDate

        }
        console.log({form});

        const callback = () => {
            this.isBusy = false;
            this.router.navigate(['/home']);
        };
        setTimeout(callback, 5000);
    }
}
