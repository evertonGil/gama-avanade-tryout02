import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: object[] = [];

  add(message: string, messageType: string) {
    let obj = {
      text: message,
      type: messageType
    };

    this.messages.push(obj);
    setTimeout(() => this.delete(this.messages.lastIndexOf(obj)) , 4000);
  }
  delete(i){
    this.messages.splice(i, 1);
  }

  clear() {
    this.messages = [];
  }

}
