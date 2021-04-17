import { Gpt3summarizationService } from './../gpt3summarization.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-voicerecorder-component',
  templateUrl: './voicerecorder-component.component.html',
  styleUrls: ['./voicerecorder-component.component.scss']
})

export class VoicerecorderComponentComponent implements OnInit {
  title = 'micRecorder';
  //Lets declare Record OBJ
  record: any | undefined;
  //Will use this flag for toggeling recording
  recording = false;
  //URL of Blob
  url: string | undefined;
  error: string | undefined;

  constructor(private domSanitizer: DomSanitizer, private gpt3Service: Gpt3summarizationService) {}

  sanitize(url: string) {
  return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
  * Start recording.
  */
  initiateRecording() {
  this.recording = true;
  let mediaConstraints = {
  video: false,
  audio: true
  };
  navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
  * Will be called automatically.
  */
  successCallback(stream: any) {
  var options = {
  mimeType: "audio/wav",
  numberOfAudioChannels: 1,
  sampleRate: 44000,
  };
  //Start Actuall Recording
  var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
  this.record = new StereoAudioRecorder(stream, options);
  this.record.record();
  }
  /**
  * Stop recording.
  */
  stopRecording() {
  this.recording = false;
  this.record.stop(this.processRecording.bind(this));
  }
  /**
  * processRecording Do what ever you want with blob
  * @param  {any} blob Blog
  */
  processRecording(blob: any) {
  this.url = URL.createObjectURL(blob);
  console.log("blob", blob);
  console.log("url", this.url);
  console.log("name")
  this.gpt3Service.initiateUpload(blob);
  }
  /**
  * Process Error.
  */
  errorCallback(_error: any) {
  this.error = 'Can not play audio in your browser';
  }

  ngOnInit(): void {
  }

}
