import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() changeLangEvent = new EventEmitter<string>();
  numLevel = 2;
  numbers: Array<number>;

  constructor() {
    this.numbers = Array(this.numLevel);
   }

  ngOnInit() {
  }

  callChangeLang(lang: string) {
    this.changeLangEvent.emit(lang);
  }


}
