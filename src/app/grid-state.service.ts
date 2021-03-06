import { Injectable, Input } from '@angular/core';
import { Grille } from './grille';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class GridStateService {
  @Input() size = 5;
  @Input() difficulty = 5;
  grille: Grille;

  MAX_ERROR = 3;
  nbError =  Array<number>(this.MAX_ERROR).fill(0, 0, this.MAX_ERROR);
  currentError = 0;

  try = true;
  finish = false;

  timer = 0;
  timerInter;

  // Time trial var
  endChoice: boolean;
  countResolve = 0;

  constructor() {
  }

  generateGrid(size: number = 5, endingChrono: boolean = false, difficulty: number = 5) {
    this.grille = new Grille(size, difficulty);
    this.reset();
    this.endChoice = endingChrono;
  }

  loadGrid(grid: any) {
    this.grille = new Grille(grid.size, grid.difficulty, grid.solution, grid.color);
    this.reset();
    this.endChoice = false;
  }

  reset() {
    this.nbError =  Array<number>(this.MAX_ERROR).fill(0, 0, this.MAX_ERROR);
    this.currentError = 0;
    this.try = true;
    this.finish = false;
    this.timer = 0;
    clearInterval(this.timerInter);
    this.timerInter = setInterval(() =>
    this.timer++, 1000
  );
  }

  verifProgress() {
    let ok = true;
    for (let row = 0; row < this.grille.size; row++) {
      for (let col = 0; col < this.grille.size; col++) {
        if (this.grille.played[row][col].getState() === Case.FULL) {
          if (!this.grille.played[row][col].equals(this.grille.solution[row][col])) {
            ok = false;
          }
        }
      }
    }

    if (this.nbError[this.MAX_ERROR - 1] === 0) {
      this.nbError[this.currentError] = 1;
      this.currentError++;
    }
    if (this.nbError[this.MAX_ERROR - 1] === 1) {
      this.try = false;
    }

    return ok;
  }

  verifState() {
    let victory = true;
    for (let row = 0; row < this.grille.size; row++) {
      for (let col = 0; col < this.grille.size; col++) {
        if (!this.grille.played[row][col].equals(this.grille.solution[row][col])) {
          victory = false;
        }
      }
    }

    return victory;
  }

  endChange() {
    clearInterval(this.timerInter);
    if (this.endChoice) {
      this.countResolve++;

      setTimeout(() =>
      this.grille = new Grille(5)
        , 300);
      this.reset();
    } else {
      this.finish = true;
    }
  }
}
