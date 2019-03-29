import { Component, OnInit } from '@angular/core';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numLevel = 2;
  numbers: Array<Number>;
  constructor() {
    this.numbers = Array(this.numLevel);
   }

  ngOnInit() {
  }

}
