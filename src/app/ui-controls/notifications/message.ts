export class Message {
    content: string;
    type: string;
    dismissed: boolean = false;
  
    constructor(content: string, type?: string) {
      this.content = content
      this.type = type || 'info'
    }  
  }