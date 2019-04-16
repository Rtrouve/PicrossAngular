import { Component, OnInit, Input } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-difficulty-choice',
  templateUrl: './difficulty-choice.component.html',
  styleUrls: ['./difficulty-choice.component.css']
})
export class DifficultyChoiceComponent implements OnInit {
  @Input() gridState: GridStateService;
  difficultyList = ['RANDOM.easy', 'RANDOM.medium', 'RANDOM.hard'];

  constructor() { }

  ngOnInit() {
  }

  generate() {
    this.gridState.generateGrid(this.gridState.size, false, this.gridState.difficulty);
  }

  difficultyCorrespond(difficultyString: string) {
    if (difficultyString === this.difficultyList[0]) {
      return 7;
    }
    if (difficultyString === this.difficultyList[1]) {
      return 5;
    }
    if (difficultyString === this.difficultyList[2]) {
      return 3;
    }

  }

}
