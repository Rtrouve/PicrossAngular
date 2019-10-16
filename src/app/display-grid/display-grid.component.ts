import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../case';
import { GridStateService } from '../grid-state.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { $$ } from 'protractor';

@Component({
  selector: 'app-display-grid',
  animations: [
    trigger('selectedTransition', [
      state('empty', style({
      //  backgroundColor: 'white',
        backgroundSize: '0% 0%',
      })),
      state('full', style({
      //  backgroundColor: 'black',
        backgroundImage: 'linear-gradient(black, black)',
        backgroundSize: '100% 100%',
      })),
      state('cross', style({
        backgroundImage: 'url("./assets/croix.png")',
        backgroundSize: '100% 100%'
      })),
      transition('* => cross', [
        animate('0.1s')
      ]),
      transition('* => *', [
        animate('0.5s ease-out')
      ])
    ]),
    trigger('coloring', [
      state('color', style({
        backgroundSize: '0% 0%',
        backgroundColor: '{{ backColor}}'
      }), {params: { backColor: 'white'}}),
      state('transparent', style({
        backgroundColor: 'white'
      })),
      transition('* => color', [
        animate('0.5s')
      ])
    ])
  ],
  templateUrl: './display-grid.component.html',
  providers: [GridStateService],
  styleUrls: ['./display-grid.component.scss']
})
export class DisplayGridComponent implements OnInit {
  @Input() gridState: GridStateService;
  clicked = false;
  crossed = false;

  visualIndiceCol: boolean[];
  visualIndiceRow: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.visualIndiceCol = new Array(this.gridState.size);
    this.visualIndiceRow = new Array(this.gridState.size);
    for (let i = 0; i < this.gridState.size; i++) {
      this.visualIndiceCol[i] = false;
      this.visualIndiceRow[i] = false;
    }
  }

  changeIndice(i: number, j: number) {
    const indicesRow = this.gridState.grille.indRow[i];
    const indicesCol = this.gridState.grille.indCol[j];

    /*vérifier la ligne*/
    let stopVerif = 0;
    let current = 0;
//    let depCurrent = 0;
    let caseVerif = true;
    let countInd = 0;
    for (const element of indicesRow) {

      while (current < this.gridState.grille.size) {
        let compt = element;
        caseVerif = true;

        while (current < this.gridState.grille.size && !(this.gridState.grille.played[i][current].getState() === Case.FULL)) {
          current++;
  //        depCurrent = current;
        }
        while (current < this.gridState.grille.size && this.gridState.grille.played[i][current].getState() === Case.FULL) {
          compt--;
          current++;
        }
        if (compt !== 0) {
          caseVerif = false;
        }

        if (caseVerif &&
          ((countInd === 0 ||
          countInd > 0 && (indicesRow.slice(0, countInd).reduce(this.sumIndiceArray) < current - element))
          && (countInd === indicesRow.length - 1 ||
          indicesRow.slice(countInd + 1).reduce(this.sumIndiceArray) < (this.gridState.grille.size - current) ))) {
          stopVerif = current;
          this.gridState.grille.markIndRow[i][countInd] = true;
          break;
        } else {
          this.gridState.grille.markIndRow[i][countInd] = false;
        }
      }

      if (this.gridState.grille.markIndRow[i][countInd] === false) {
        current = stopVerif;
      }
//      depCurrent = stopVerif;
      countInd++;
    }

    let lineVerif = this.gridState.grille.markIndRow[i].reduce(this.boolAndArray);
    while (current < this.gridState.grille.size) {
      lineVerif = lineVerif && !(this.gridState.grille.played[i][current].getState() === Case.FULL);
      current++;
    }

    if (this.gridState.grille.markIndRow[i].reduce(this.boolAndArray) && !lineVerif) {
      this.gridState.grille.markIndRow[i].fill(false);
    }

    /*vérifier la colonne*/
    stopVerif = 0;
    current = 0;
    caseVerif = true;
    countInd = 0;
//    depCurrent = 0;
    for (const element of indicesCol) {

      while (current < this.gridState.grille.size) {
        caseVerif = true;
        let compt = element;

        while (current < this.gridState.grille.size && !(this.gridState.grille.played[current][j].getState() === Case.FULL)) {
  //       depCurrent = current;
          current++;
        }
        while (current < this.gridState.grille.size && this.gridState.grille.played[current][j].getState() === Case.FULL) {
          compt--;
          current++;
        }

        if (compt !== 0) {
  //        || !((current === this.gridState.grille.size || this.gridState.grille.played[current][j].getState() === Case.CROSS)
  //        && (depCurrent === 0 || this.gridState.grille.played[depCurrent][j].getState() === Case.CROSS))) {
          caseVerif = false;
        }

        if (caseVerif &&
          ((countInd === 0 ||
          countInd > 0 && (indicesCol.slice(0, countInd).reduce(this.sumIndiceArray) < current - element))
          && (countInd === indicesCol.length - 1 ||
          indicesCol.slice(countInd + 1).reduce(this.sumIndiceArray) < (this.gridState.grille.size - current) ))) {
          stopVerif = current;
          this.gridState.grille.markIndCol[j][countInd] = true;
          break;
        } else {
          this.gridState.grille.markIndCol[j][countInd] = false;
        }

      }

      if (this.gridState.grille.markIndRow[i][countInd] === false) {
        current = stopVerif;
      }
//      depCurrent = stopVerif;
      countInd++;
    }

    let colVerif = this.gridState.grille.markIndCol[j].reduce(this.boolAndArray);
    while (current < this.gridState.grille.size) {
      colVerif = colVerif && !(this.gridState.grille.played[current][j].getState() === Case.FULL);
      current++;
    }

    if (this.gridState.grille.markIndCol[j].reduce(this.boolAndArray) && !colVerif) {
      this.gridState.grille.markIndCol[j].fill(false);
    }

    const sumCol =  this.gridState.grille.markIndCol.reduce(this.boolAndArray);
    const sumRow =  this.gridState.grille.markIndRow.reduce(this.boolAndArray);

    if (sumCol && sumRow) {
      if (this.gridState.verifState()) {
        this.gridState.endChange();
      }
    } else {
      this.gridState.finish = false;
    }
    return false;
  }

  boolAndArray(accumulator, a) {
    return accumulator && a;
  }

  sumIndiceArray(accumulator, a) {
    return accumulator + a + 1;
  }

  mouseDown(event, i: number, j: number, picrossCase: Case) {
    if (event.which === 1) {
      this.clicked = true;
      this.crossed = false;
      picrossCase.changeState();
      this.changeIndice(i, j);
    } else {
      if (event.which === 3 ) {
        event.preventDefault();
        this.crossed = true;
        this.clicked = false;
        picrossCase.markState();
        this.changeIndice(i, j);
      }
    }
  }

  mouseOver(i: number, j: number, picrossCase: Case) {
    if ( this.clicked ) {
      picrossCase.changeState();
      this.changeIndice(i, j);
    } else {
      if ( this.crossed ) {
        picrossCase.markState();
        this.changeIndice(i, j);
      }
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
