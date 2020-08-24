import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Chat} from "../interfaces/Chat";

@Component({
    selector: 'ns-chat-detail',
    templateUrl: './chat-detail.component.html',
    styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {

    public selectedChat: Chat;

    private chatList: Chat[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.chatList = [
            {firstname: 'Tiani', lastMessage: 'Bonjour', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Jean', lastMessage: 'Hi 😁', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Alice', lastMessage: 'Et ?', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Rosine', lastMessage: 'Hallo', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Balla', lastMessage: 'Hmmmm', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Ezrav', lastMessage: 'Okay😡', photoUrl: 'https://picsum.photos/id/237/200/300'}
        ];

        console.log(this.route.snapshot.params)
        const selectedChatIndex: number = this.route.snapshot.params['index'];
        this.selectedChat = this.chatList[selectedChatIndex];
        console.log(this.selectedChat)
    }


}


