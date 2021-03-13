import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public webSocket: WebsocketService) {
    webSocket.listen('newMessage').subscribe(d => {
        this.messages.push(String(d));
      });
  }

  ngOnInit() {
  }

  sendMessage() {
    this.webSocket.emit('message', this.message)
    this.message = ''
  }

  message: string;
  messages: string[] = [];
}
