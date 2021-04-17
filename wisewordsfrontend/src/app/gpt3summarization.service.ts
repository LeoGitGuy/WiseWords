import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class Gpt3summarizationService {

  BASE_URL = environment.urlRoot;

  receivedMessage = {messageTrans: "", messageGPT: ""};
  private messageUpdate = new Subject<any>();

  constructor(private http: HttpClient) { }

  getMessageUpdateListener(){
    return this.messageUpdate.asObservable();
  }

  initiateUpload(audioFile: any){
    const postData = new FormData()
    postData.append("file", audioFile, audioFile.name == undefined ? "newAudioFile.wav" : audioFile.name)
    this.http
      .post<{ transcription: string, gptres: string, prompt: string}>(
       this.BASE_URL + "audio",
        postData
      )
      .subscribe((res) => {

        this.receivedMessage.messageTrans = res.transcription;
        this.receivedMessage.messageGPT = res.gptres;
        this.messageUpdate.next(...[this.receivedMessage]);
        let str = "";
        if (res.transcription == "false") {
          str =
            "Fehler beim Hochladen der Excel Datei. Die Tabelle wurde nicht korrekt befüllt. \n Folgender Fehler ist aufgetreten: \n\n";

        }

      });
  }


}
