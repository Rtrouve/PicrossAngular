import { Component, OnInit } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  constructor(public gridState: GridStateService) { }

  ngOnInit() {
    this.gridState.generateGrid(this.gridState.size, false, this.gridState.difficulty);
  }

}
