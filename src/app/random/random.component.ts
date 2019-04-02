import { Component, OnInit } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor(public gridState: GridStateService) { }

  ngOnInit() {
  }

}
