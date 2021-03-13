import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {
    // this.socket = io(this.uri);
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
