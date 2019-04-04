import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numLevel = 2;
  numbers: Array<number>;
  constructor() {
    this.numbers = Array(this.numLevel);
   }

  ngOnInit() {
  }

}
