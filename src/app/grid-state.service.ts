import { Injectable, Input } from '@angular/core';
import { Grille } from './grille';

@Injectable({
  providedIn: 'root'
})
export class GridStateService {
  @Input() difficulty:number = 5;
  grille:Grille;

  MAX_ERROR = 3;
  nb_error =  Array<number>(this.MAX_ERROR).fill(0,0,this.MAX_ERROR);
  current_error = 0;

  try:boolean = true;

  // Time trial var
  endChoice:boolean;
  countResolve:number=0;

  constructor() {

  }


  generateGrid(size:number = 5, endingChrono:boolean = false){
    this.grille = new Grille(size);
    this.reset();
    this.endChoice = endingChrono;
  }

  reset(){
    this.nb_error =  Array<number>(this.MAX_ERROR).fill(0,0,this.MAX_ERROR);
    this.current_error = 0;
    this.try = true;
  }

  verifState(){
    let victory = true;
    for (let row = 0; row < this.grille.size; row++) {
      for (let col = 0; col < this.grille.size; col++) {
        if(!this.grille.played[row][col].equals(this.grille.solution[row][col])){
          victory = false;   
        }
      }      
    }
    
    if(!victory) {
      if(this.nb_error[this.MAX_ERROR-1] == 0) {
        this.nb_error[this.current_error] = 1;
        this.current_error++;
      } 
      if(this.nb_error[this.MAX_ERROR-1] == 1) {
        this.try = false;
      }
    }

    return victory;
  }

  endChange(){
    if(this.endChoice){
      this.countResolve++;
      
      setTimeout(() =>
      this.grille = new Grille(5)
        , 300);
      this.reset();
    }
  }


}
