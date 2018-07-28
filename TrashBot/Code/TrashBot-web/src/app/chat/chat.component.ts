import { Component, OnInit,Inject } from '@angular/core';
import { Message} from './model/message.model';
import { User } from './model/user.model';
import {ChatService} from './chat.service';
import { DOCUMENT } from '@angular/platform-browser';

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

  constructor(private chatService: ChatService, 
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  public sendMessage(text: string): void {
    if (!text) {
      return;
    }
    let msj = new Message(this.user, text);
    // this.chatService.chatear(msj).subscribe(
      //   res => {
        //     // console.log(res.output.text);
        //     let response = new Message(new User("TrashBot", "avatar"), res.output.text);
        //     this.messages.push(response);
        
        //   }, error =>{
          //     console.log(error);
          //   }
          // );
          
    this.messages.push(msj);
    this.messageContent = null;
    let lista = this.document.getElementById('lista');
    lista.scrollIntoView(false);
}

}
