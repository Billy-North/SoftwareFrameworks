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
  }

  private initIoConnection(room: string) {
    this.socketService.initSocket(room);
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

  onChange(deviceValue) {
    this.initIoConnection(deviceValue);


}

}
