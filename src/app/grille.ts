import { Case } from './case';

export class Grille {
    solution: Case[][] = new Array();
    played: Case[][] = new Array();

    ind_row: number[][] = new Array();
    mark_ind_row: boolean[] = new Array();
    ind_col: number[][] = new Array();
    mark_ind_col: boolean[] = new Array();

    constructor(public size: number, sol?: Case[][], pla?: Case[][]){
        for (let row = 0; row < this.size; row++) {
            this.solution[row] = new Array();
            this.played[row] = new Array();
            for (let col = 0; col < this.size; col++) {
                this.solution[row][col] = new Case(Math.floor(Math.random()*2));
                this.played[row][col] = new Case(0);  
            }
            
        }

        if(sol){
            this.solution = sol;
        }
        if(pla){
            this.played = pla;
        }
        
        for (let row = 0; row < this.size; row++) {
            let sumTempRow = 0;
            let sumTempCol = 0; 
            this.ind_col[row] = new Array();
            this.ind_row[row] = new Array();
            this.mark_ind_row[row] = false;
            this.mark_ind_col[row] = false;
            for (let col = 0; col < this.size; col++) {
                if(this.solution[row][col].getState() == 0){
                    if(sumTempRow!=0) {
                        this.ind_row[row].push(sumTempRow);
                    }
                    sumTempRow = 0;
                } else {
                    sumTempRow++;
                }
                if(this.solution[col][row].getState() == 0){
                    if(sumTempCol!=0) {
                        this.ind_col[row].push(sumTempCol);
                    }
                    sumTempCol=0;
                } else {
                    sumTempCol++;
                }
            }
            if(sumTempRow!=0) {
                this.ind_row[row].push(sumTempRow);
            }
            if(sumTempCol!=0) {
                this.ind_col[row].push(sumTempCol);
            }
            if(this.ind_row[row].length == 0){
                this.ind_row[row].push(0);
            }
            if(this.ind_col[row].length == 0){
                this.ind_col[row].push(0);
            }
        }

    }
    

}
