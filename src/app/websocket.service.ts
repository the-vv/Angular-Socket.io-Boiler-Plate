import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  uri: string = 'http://localhost:3000';

  constructor() {
    console.log();
    
    this.socket = io(this.uri);
  }

  listen(eventName: string) {
    return new Observable((subs) => {
      this.socket.on(eventName, (data) => {
        subs.next(data);
      })
    })
  }

  emit(eventName: string, data: string) {
    this.socket.emit(eventName, data)
  }
}
