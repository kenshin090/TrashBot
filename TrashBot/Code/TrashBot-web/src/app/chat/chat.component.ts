import { Component, OnInit } from '@angular/core';
import { Message} from './model/message.model';
import { User } from './model/user.model';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
//https://github.com/luixaviles/socket-io-typescript-chat

  public messages: Message[] = [];
  public messageContent: string;
  public user : User = new User("Tu", "abc");

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public sendMessage(text: string): void {
    if (!text) {
      return;
    }
    
    let msj = new Message(this.user, text);
    this.chatService.chatear(msj).subscribe(
      res => {
        console.log(res.output.text);
      }, error =>{
        console.log(error);
      }
    );
    // this.socketService.send({
    //   from: this.user,
    //   content: message
    // });

    this.messages.push(msj);
    this.messageContent = null;
}

}
