import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  
  options = [
    { value: 'This is value 1', label: 'Transcribe only' },
    { value: 'This is value 2', label: 'Use simply style' },
    { value: 'This is value 3', label: 'Edit afterwards' },
    { value: 'This is value 4', label: 'Sentiment' },
  ];

 ;

 
  constructor() { }

  ngOnInit(): void {
  }

}

