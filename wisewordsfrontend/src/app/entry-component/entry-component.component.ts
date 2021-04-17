import { Gpt3summarizationService } from './../gpt3summarization.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject, Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-entry-component',
  templateUrl: './entry-component.component.html',
  styleUrls: ['./entry-component.component.scss']
})
export class EntryComponentComponent implements OnInit {
  constructor(private sanitizer : DomSanitizer, private http: HttpClient, private gpt3Service: Gpt3summarizationService) { }
  messages: any[] = [];
  chatBotName = "GPT-3";
private editSub : Subscription | undefined;

  chatAvatar = "https://thdaily.s3-us-west-1.amazonaws.com/gif_20200719232646.gif";
  ngOnInit(): void {
    this.editSub = this.gpt3Service.getMessageUpdateListener().subscribe((newMsg : {messageTrans: string, messageGPT: string}) =>{
      console.log(newMsg);
      console.log(newMsg.messageGPT);
      this.gpt3Message(newMsg.messageGPT);
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
    if(event.files[0] != undefined){
      let myfile = event.files[0];
      console.log(myfile);
      console.log("here");
      this.gpt3Service.initiateUpload(myfile);
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

