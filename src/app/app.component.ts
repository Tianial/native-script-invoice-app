import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public activeChallenges: Array<string> = [];

    public handleEvent(text: string): void {
        this.activeChallenges.push(text);
    }
}
