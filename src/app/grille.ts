import { Case } from './case';

export class Grille {
    // the grids
    solution: Case[][] = new Array();
    played: Case[][] = new Array();

    // the indications
    indRow: number[][] = new Array();
    indCol: number[][] = new Array();

    // The indications to fade if completed
    markIndRow: boolean[][] = new Array();
    markIndCol: boolean[][] = new Array();

    maxIndRow = 0;

    constructor(public size: number= 5, difficulty: number = 5, sol?: Case[][], pla?: Case[][]) {

        // Create the grid to solve (at random)
        for (let row = 0; row < this.size; row++) {
            this.solution[row] = new Array();
            this.played[row] = new Array();
            for (let col = 0; col < this.size; col++) {

                // The state of the cell (Full or Empty)
                // 5O% for each, change this to change difficulty (Emptier is more difficult)
                const stateTemp = Math.floor(Math.random() * 10);

                // Create with color 'white' if empty, else random
                if (stateTemp > difficulty ) {
                    this.solution[row][col] = new Case(0, 'white');
                } else {
                    this.solution[row][col] = new Case(1);
                }

                // Create empty player grid with the right color
                this.played[row][col] = new Case(0, this.solution[row][col].getColor());
            }

        }

        // For saved grid, not used yet
        if (sol) {
            this.solution = sol;
        }
        if (pla) {
            this.played = pla;
        }

        // Creating the indications to solve the grid
        for (let row = 0; row < this.size; row++) {

            let sumTempRow = 0;
            let sumTempCol = 0;
            this.indCol[row] = new Array();
            this.indRow[row] = new Array();
            this.markIndRow[row] = new Array();
            this.markIndCol[row] = new Array();

            for (let col = 0; col < this.size; col++) {

                if (this.solution[row][col].getState() === 0) {
                    if (sumTempRow !== 0) {
                        this.indRow[row].push(sumTempRow);
                        this.markIndRow[row].push(false);
                    }
                    sumTempRow = 0;
                } else {
                    sumTempRow++;
                }
                if (this.solution[col][row].getState() === 0) {
                    if (sumTempCol !== 0) {
                        this.indCol[row].push(sumTempCol);
                        this.markIndCol[row].push(false);
                    }
                    sumTempCol = 0;
                } else {
                    sumTempCol++;
                }
            }
            if (sumTempRow !== 0) {
                this.indRow[row].push(sumTempRow);
                this.markIndRow[row].push(false);
                if (this.indRow[row].length > this.maxIndRow) {
                    this.maxIndRow = this.indRow[row].length;
                }
            }
            if (sumTempCol !== 0) {
                this.indCol[row].push(sumTempCol);
                this.markIndCol[row].push(false);
            }

            if (this.indRow[row].length === 0) {
                this.indRow[row].push(0);
                this.markIndRow[row].push(true);
            }
            if (this.indCol[row].length === 0) {
                this.indCol[row].push(0);
                this.markIndCol[row].push(true);
            }
        }

    }
}
