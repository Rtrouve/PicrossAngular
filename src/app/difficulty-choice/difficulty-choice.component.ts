import { Component, OnInit, Input } from '@angular/core';
import { GridStateService } from '../grid-state.service';
import { SavingService } from '../saving.service';

@Component({
  selector: 'app-difficulty-choice',
  templateUrl: './difficulty-choice.component.html',
  styleUrls: ['./difficulty-choice.component.css']
})
export class DifficultyChoiceComponent implements OnInit {
  @Input() gridState:GridStateService;
  filename = "grid"+SavingService.count+".json";

  constructor(private saving: SavingService) { }

  ngOnInit() {
  }

  generate() {
    this.gridState.generateGrid(this.gridState.difficulty);
  }

  save(){
    this.saving.save(this.gridState.grille.solution, this.gridState.grille.played, this.filename);
  }

  open(){
    this.gridState.grille = this.saving.load(this.filename);
  }

}
