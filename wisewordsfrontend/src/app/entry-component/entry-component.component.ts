import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-entry-component',
  templateUrl: './entry-component.component.html',
  styleUrls: ['./entry-component.component.scss']
})
export class EntryComponentComponent implements OnInit {
  constructor(private sanitizer : DomSanitizer, private http: HttpClient) { }
  messages: any[] = [];
  chatBotName = "GPT-3";
  chatAvatar = "https://thdaily.s3-us-west-1.amazonaws.com/gif_20200719232646.gif";
  ngOnInit(): void {
  }

  generatempdownload(){

  }
  initiateUpload(file: any){
    const postData = new FormData()
    postData.append("file", file, file.name)
    this.http
      .post<{ message: string}>(
        "http://localhost:3000/wisewords/upload/audio",
        postData
      )
      .subscribe((res) => {
        console.log(res.message);
        this.gpt3Message(res.message);

        let str = "";
        if (res.message == "false") {
          str =
            "Fehler beim Hochladen der Excel Datei. Die Tabelle wurde nicht korrekt befüllt. \n Folgender Fehler ist aufgetreten: \n\n";

        }

      });
  }

gpt3Message(transcribedText : string){
  this.messages.push({
    text: transcribedText,
    date: new Date(),
    reply: true,
    type: "text",
    files: [],
    user: {
      name: this.chatBotName,
      avatar: this.chatAvatar
    }
  })
}

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    if(event.files != []){
      let myfile = event.files[0];

      this.initiateUpload(myfile);


      console.log(myfile);

    }
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
    console.log(this.messages)
  }
}

