import {Component, OnInit} from '@angular/core';
import {Chat} from "../interfaces/Chat";

@Component({
    selector: 'ns-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

    public chatList: Array<Chat>;  // or chat[]//

    constructor() {
    }
    // as from this.chatList,it is the stage of initialisation//
    ngOnInit(): void {
        this.chatList = [
            {firstname: 'Tiani', lastMessage: 'Bonjour', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Jean', lastMessage: 'Hi 😁', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Alice', lastMessage: 'Et ?', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Rosine', lastMessage: 'Hallo', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Balla', lastMessage: 'Hmmmm', photoUrl: 'https://picsum.photos/id/237/200/300'},
            {firstname: 'Ezrav', lastMessage: 'Okay😡', photoUrl: 'https://picsum.photos/id/237/200/300'}
        ];
    }

}

