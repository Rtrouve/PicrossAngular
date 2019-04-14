import { Component, OnInit, Input } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-difficulty-choice',
  templateUrl: './difficulty-choice.component.html',
  styleUrls: ['./difficulty-choice.component.css']
})
export class DifficultyChoiceComponent implements OnInit {
  @Input() gridState: GridStateService;

  constructor() { }

  ngOnInit() {
  }

  generate() {
    this.gridState.generateGrid(this.gridState.difficulty);
  }

}
