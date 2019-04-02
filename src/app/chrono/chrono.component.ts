import { Component, OnInit } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {

  constructor(public gridState: GridStateService) { }

  ngOnInit() {
    this.gridState.generateGrid(5);
  }

}
