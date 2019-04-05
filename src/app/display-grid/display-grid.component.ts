import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../case';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-display-grid',
  templateUrl: './display-grid.component.html',
  providers: [GridStateService],
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent implements OnInit {
  @Input() gridState: GridStateService;
  clicked = false;

  visualIndiceCol: boolean[];
  visualIndiceRow: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.visualIndiceCol = new Array(this.gridState.difficulty);
    this.visualIndiceRow = new Array(this.gridState.difficulty);
    for (let i = 0; i < this.gridState.difficulty; i++) {
      this.visualIndiceCol[i] = false;
      this.visualIndiceRow[i] = false;
    }
  }

  changeIndice(i: number, j: number) {
    const indicesRow = this.gridState.grille.indRow[i];
    const indicesCol = this.gridState.grille.indCol[j];

    /*vérifier la ligne*/
    let current = 0;
    let lineVerif = true;
    for (const element of indicesRow) {
      let compt = element;

      while (current < this.gridState.grille.size && !(this.gridState.grille.played[i][current].getState() === Case.FULL)) {
        current++;
      }
      while (current < this.gridState.grille.size && this.gridState.grille.played[i][current].getState() === Case.FULL) {
        compt--;
        current++;
      }
      if (compt !== 0) {
        lineVerif = false;
      }
    }

    while (current < this.gridState.grille.size) {
      lineVerif = lineVerif && !(this.gridState.grille.played[i][current].getState() === Case.FULL);
      current++;
    }

    if (lineVerif) {
      this.gridState.grille.markIndRow[i] = true;
    } else {
      this.gridState.grille.markIndRow[i] = false;
    }

    /*vérifier la colonne*/
    current = 0;
    let colVerif = true;
    for (const element of indicesCol) {
      let compt = element;

      while (current < this.gridState.grille.size && !(this.gridState.grille.played[current][j].getState() === Case.FULL)) {
        current++;
      }
      while (current < this.gridState.grille.size && this.gridState.grille.played[current][j].getState() === Case.FULL) {
        compt--;
        current++;
      }
      if (compt !== 0) {
        colVerif = false;
      }
    }

    while (current < this.gridState.grille.size) {
      colVerif = colVerif && !(this.gridState.grille.played[current][j].getState() === Case.FULL);
      current++;
    }

    if (colVerif) {
      this.gridState.grille.markIndCol[j] = true;
    } else {
      this.gridState.grille.markIndCol[j] = false;
    }

    const sumCol =  this.gridState.grille.markIndCol.reduce(this.boolAndArray);
    const sumRow =  this.gridState.grille.markIndRow.reduce(this.boolAndArray);

    if (sumCol && sumRow) {
      if (this.gridState.verifState) {
        this.gridState.endChange();
      }
      /* Add method in grid service > what to do when the grid is completed
         bool in constructor to choose behaviour (pass for time trial / color for random|level) ?

         TODO
      if(this.gridState.verifState()) {

        // Generate New Grid
        setTimeout(() =>
        this.generate()
        , 1000);

      }
      */
    }
    return false;
  }

  boolAndArray(accumulator, a) {
    return accumulator && a;
  }

  mouseDown(event, i: number, j: number, picrossCase: Case) {
    if (event.which === 1) {
      this.clicked = true;
      picrossCase.changeState();
      this.changeIndice(i, j);
    }
  }

  addVisualIndice(c: number, r: number) {
    this.visualIndiceCol[c] = true;
    this.visualIndiceRow[r] = true;
  }

  deleteVisualIndice(c: number, r: number) {
    this.visualIndiceCol[c] = false;
    this.visualIndiceRow[r] = false;
  }

}
