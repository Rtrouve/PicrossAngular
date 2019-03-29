import { Component, OnInit, Input } from '@angular/core';
import { Grille } from '../grille';
import { Case } from '../case';
import { SavingService } from '../saving.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent implements OnInit {
  @Input() difficulty = 5;
  MAX_ERROR = 3;

  grille = new Grille(this.difficulty);
  message = "";
  filename = "grid"+SavingService.count+".json";

  command_answer = "Montrez la réponse";
  answerState = "answer-hidden";

  clicked = false;
  try = true;


  nb_error =  Array<number>(this.MAX_ERROR).fill(0,0,this.MAX_ERROR);
  current_error = 0;

  markIndRow: Array<boolean>;
  markIndCol:Array<boolean>;

  

  constructor(private saving: SavingService) { }

  ngOnInit() {
  }

  
  verif() {
    this.message = "Gagné !";
    for (let row = 0; row < this.grille.size; row++) {
      for (let col = 0; col < this.grille.size; col++) {
        if(!this.grille.played[row][col].equals(this.grille.solution[row][col])){
          this.message = "Faux !";
          
        }
      }      
    }
    setTimeout(() =>
      this.message = ''
    , 1000);

    if(this.message == "Gagné !")
      return true
    else {
      if(this.nb_error[this.MAX_ERROR-1] == 0) {
        this.nb_error[this.current_error] = 1;
        this.current_error++;
      } else {
        this.try = false;
      }
      return false;
    }
      
  }

  show_answer() {
    if(this.answerState == 'answer-hidden'){
      this.answerState = 'answer-shown';
    } else {
      this.answerState = 'answer-hidden';
    } 
  }

  generate() {
    this.grille = new Grille(this.difficulty);
    this.nb_error =  Array<number>(this.MAX_ERROR).fill(0,0,this.MAX_ERROR);
    this.current_error = 0;
    this.try = true;
  }

  save(){
    this.saving.save(this.grille.solution, this.grille.played, this.filename);
  }

  open(){
    this.grille = this.saving.load(this.filename);
  }

  changeIndice(i:number, j:number){
    let indices_row = this.grille.ind_row[i];
    let indices_col = this.grille.ind_col[j];

    /*vérifier la ligne*/
    let current = 0;
    let line_verif = true;
    for (let element of indices_row) {
      let compt = element;

      while (current < this.grille.size && !(this.grille.played[i][current].getState() == Case.FULL)){
        current++;
      }
      while (current < this.grille.size && this.grille.played[i][current].getState() == Case.FULL) {
        compt--;
        current++;
      }
      if(compt!=0) {
        line_verif=false;
      }
    }

    while(current < this.grille.size){
      line_verif = line_verif && !(this.grille.played[i][current].getState() == Case.FULL); 
      current++;
    }

    if(line_verif){
      this.grille.mark_ind_row[i] = true;
    } else {
      this.grille.mark_ind_row[i] = false;
    }

    /*vérifier la colonne*/
    current = 0;
    let col_verif = true;
    for (let element of indices_col) {
      let compt = element;

      while (current < this.grille.size && !(this.grille.played[current][j].getState() == Case.FULL)){
        current++;
      }
      while (current < this.grille.size && this.grille.played[current][j].getState() == Case.FULL) {
        compt--;
        current++;
      }
      if(compt!=0) {
        col_verif=false;
      }
    }

    while(current < this.grille.size){
      col_verif = col_verif && !(this.grille.played[current][j].getState() == Case.FULL); 
      current++;
    }

    if(col_verif){
      this.grille.mark_ind_col[j] = true;
    } else {
      this.grille.mark_ind_col[j] = false;
    }

    let sumCol =  this.grille.mark_ind_col.reduce(this.boolAndArray);
    let sumRow =  this.grille.mark_ind_row.reduce(this.boolAndArray);
    
    if(sumCol && sumRow) {
      if(this.verif()) {
        setTimeout(() =>
        this.generate()
        , 1000);
      }
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
