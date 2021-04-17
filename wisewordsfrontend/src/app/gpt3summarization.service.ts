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

  receivedMessage = "";

  constructor(private http: HttpClient) { }

  initiateUpload(audioFile: any){
    const postData = new FormData()
    postData.append("file", audioFile, audioFile.name == undefined ? "newAudioFile.wav" : audioFile.name)
    this.http
      .post<{ transcript: string, gptres: string, prompt: string}>(
       this.BASE_URL + "audio",
        postData
      )
      .subscribe((res) => {
        console.log(res.transcript + res.prompt + "\n###\n" + res.gptres);
        this.receivedMessage = res.transcript;

        let str = "";
        if (res.transcript == "false") {
          str =
            "Fehler beim Hochladen der Excel Datei. Die Tabelle wurde nicht korrekt befüllt. \n Folgender Fehler ist aufgetreten: \n\n";

        }

      });
  }


}
