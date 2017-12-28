import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  add(message: string) {

    this.messages.push(message);
    setTimeout(() => this.delete(this.messages.lastIndexOf(message)) , 4000);
  }
  delete(i){
    this.messages.splice(i, 1);
  }

  clear() {
    this.messages = [];
  }

}
