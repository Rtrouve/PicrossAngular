import { Component, OnInit, Input } from '@angular/core';
import { Grille } from '../grille';
import { Case } from '../case';
import { SavingService } from '../saving.service';
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

  markIndRow: Array<boolean>;
  markIndCol: Array<boolean>;

  constructor() { }

  ngOnInit() {
  }

  changeIndice(i:number, j:number){
    let indices_row = this.gridState.grille.ind_row[i];
    let indices_col = this.gridState.grille.ind_col[j];

    /*vérifier la ligne*/
    let current = 0;
    let line_verif = true;
    for (let element of indices_row) {
      let compt = element;

      while (current < this.gridState.grille.size && !(this.gridState.grille.played[i][current].getState() == Case.FULL)){
        current++;
      }
      while (current < this.gridState.grille.size && this.gridState.grille.played[i][current].getState() == Case.FULL) {
        compt--;
        current++;
      }
      if(compt!=0) {
        line_verif=false;
      }
    }

    while(current < this.gridState.grille.size){
      line_verif = line_verif && !(this.gridState.grille.played[i][current].getState() == Case.FULL); 
      current++;
    }

    if(line_verif){
      this.gridState.grille.mark_ind_row[i] = true;
    } else {
      this.gridState.grille.mark_ind_row[i] = false;
    }

    /*vérifier la colonne*/
    current = 0;
    let col_verif = true;
    for (let element of indices_col) {
      let compt = element;

      while (current < this.gridState.grille.size && !(this.gridState.grille.played[current][j].getState() == Case.FULL)){
        current++;
      }
      while (current < this.gridState.grille.size && this.gridState.grille.played[current][j].getState() == Case.FULL) {
        compt--;
        current++;
      }
      if(compt!=0) {
        col_verif=false;
      }
    }

    while(current < this.gridState.grille.size){
      col_verif = col_verif && !(this.gridState.grille.played[current][j].getState() == Case.FULL); 
      current++;
    }

    if(col_verif){
      this.gridState.grille.mark_ind_col[j] = true;
    } else {
      this.gridState.grille.mark_ind_col[j] = false;
    }

    let sumCol =  this.gridState.grille.mark_ind_col.reduce(this.boolAndArray);
    let sumRow =  this.gridState.grille.mark_ind_row.reduce(this.boolAndArray);
    
    if(sumCol && sumRow) {
      if(this.gridState.verifState){
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

  boolAndArray(accumulator, a){
    return accumulator && a;
  }

  mouseDown(event, i, j, picrossCase){
    if(event.which == 1) {
      this.clicked=true;
      picrossCase.changeState();
      this.changeIndice(i,j);
    }
  }

}
