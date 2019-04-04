import { Case } from './case';

export class Grille {
    solution: Case[][] = new Array();
    played: Case[][] = new Array();

    indRow: number[][] = new Array();
    markIndRow: boolean[] = new Array();
    indCol: number[][] = new Array();
    markIndCol: boolean[] = new Array();

    constructor(public size: number= 5, sol?: Case[][], pla?: Case[][]) {
        for (let row = 0; row < this.size; row++) {
            this.solution[row] = new Array();
            this.played[row] = new Array();
            for (let col = 0; col < this.size; col++) {
                this.solution[row][col] = new Case(Math.floor(Math.random() * 2));
                this.played[row][col] = new Case(0);
            }

        }

        if (sol) {
            this.solution = sol;
        }
        if (pla) {
            this.played = pla;
        }

        for (let row = 0; row < this.size; row++) {
            let sumTempRow = 0;
            let sumTempCol = 0;
            this.indCol[row] = new Array();
            this.indRow[row] = new Array();
            this.markIndRow[row] = false;
            this.markIndCol[row] = false;
            for (let col = 0; col < this.size; col++) {
                if (this.solution[row][col].getState() === 0) {
                    if (sumTempRow !== 0) {
                        this.indRow[row].push(sumTempRow);
                    }
                    sumTempRow = 0;
                } else {
                    sumTempRow++;
                }
                if (this.solution[col][row].getState() === 0) {
                    if (sumTempCol !== 0) {
                        this.indCol[row].push(sumTempCol);
                    }
                    sumTempCol = 0;
                } else {
                    sumTempCol++;
                }
            }
            if (sumTempRow !== 0) {
                this.indRow[row].push(sumTempRow);
            }
            if (sumTempCol !== 0) {
                this.indCol[row].push(sumTempCol);
            }
            if (this.indRow[row].length === 0) {
                this.indRow[row].push(0);
            }
            if (this.indCol[row].length === 0) {
                this.indCol[row].push(0);
            }
        }

    }
}
