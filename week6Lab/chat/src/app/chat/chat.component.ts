import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageContent: string = ''; 
  messages: Array<string> = [];
  ioConnection: any; 


  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage().subscribe((message: string) => {
      this.messages.push(message)
    })
  }


  private chat() {
    if(this.messageContent) {
      this.socketService.send(this.messageContent);
      this.messageContent = '';
    }
  }

}
