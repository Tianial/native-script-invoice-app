import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {

    public challengeDesp: string;
    @Output()
    public onTextSend = new EventEmitter<string>();

    constructor() { }

    public ngOnInit(): void {
    }

    public onSetChallenge(): void {
        this.onTextSend.emit(this.challengeDesp);
    }

}
