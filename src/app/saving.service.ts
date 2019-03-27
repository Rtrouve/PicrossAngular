import { Injectable } from '@angular/core';
import { Case } from './case';
import { Grille } from './grille';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  static count:number;
  
  constructor() {
    SavingService.count = 0;
  }

  save(gridSolution: Case[][], gridPlayed: Case[][], filename){
    let sol = "N"
    if(!gridSolution) {
      console.error('Console.save: No data')
      return;
    }else{
      sol = JSON.stringify(gridSolution);
    }

    let state = 'N'
    if(gridPlayed){
      state = JSON.stringify(gridPlayed);
    }

    if(!filename) {
      filename = 'grid'+SavingService.count+'.json'
      SavingService.count++;
    }

    const blob = new Blob([sol+'/'+state], {type : 'application/json'});
    saveAs(blob, filename);
    /*
    this.fs.writeFile(
      filename,
      sol+'/'+state,
      (err) => {
        if(err) throw err;
        console.log('writed '+filename)
      });
      */
  }

  load(filename){

    if(!filename) {
      filename = 'grid'+SavingService.count+'.json'
      SavingService.count--;
    }

    let gridSolution: Case[][];
    let gridPlayed: Case[][];

    return new Grille(5);

    /*var data = require('src/'+filename);
    let toParse =  data.toString().split('/');
    gridSolution = JSON.parse(toParse[0]);
    if(JSON.parse(toParse[1]) != 'N')
      gridPlayed = JSON.parse(toParse[1]);

    /*
    this.fs.readFile(
      filename, (err, data) => {
        if (err) throw err;
        let toParse =  data.toString().split('/');
        gridSolution = JSON.parse(toParse[0]);
        if(JSON.parse(toParse[1]) != 'N')
          gridPlayed = JSON.parse(toParse[1]);
    });
    */ /*
    if(gridPlayed)
      return new Grille(gridSolution.length, gridSolution, gridPlayed);
    else
      return new Grille(gridSolution.length, gridSolution);

      */
  }
}
