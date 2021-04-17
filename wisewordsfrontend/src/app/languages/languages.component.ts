import { Gpt3summarizationService } from './../gpt3summarization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  selectedItem = 'german'

  constructor(private gpt3service: Gpt3summarizationService) { }

  ngOnInit(): void {

  }

  newLanguage(event: any){
    console.log(event);
    this.gpt3service.LANGUAGE = event;
  }

}
