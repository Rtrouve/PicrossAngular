import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Grille } from './grille';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const levels = [
      {size: 5, }
    ];
    return levels;
  }
  

  constructor() { }
}
