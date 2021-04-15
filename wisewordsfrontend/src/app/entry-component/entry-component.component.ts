import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-component',
  templateUrl: './entry-component.component.html',
  styleUrls: ['./entry-component.component.scss']
})
export class EntryComponentComponent implements OnInit {

  constructor() { }
  messages: any[] = [];

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file: { src: any; type: any; }) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  }
}

