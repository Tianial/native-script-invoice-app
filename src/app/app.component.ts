import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public variable: string = '  ';

    onTap() {
        this.variable = 'write a message';
    }
}

