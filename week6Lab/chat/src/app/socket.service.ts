import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket; 

  constructor() { }

  public initSocket(room): void {
    this.socket = io(SERVER_URL);
    this.socket.emit('room', room);
  }

  public send(message: string): void {
    this.socket.emit('message',message);
  }

  public onMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (data: string) => observer.next(data))
    });
  }



}
