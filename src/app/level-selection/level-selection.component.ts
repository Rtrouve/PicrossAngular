import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.scss']
})
export class LevelSelectionComponent implements OnInit {
  levels: Array<any>;

  constructor(private gridFetch: LevelService) { }

  ngOnInit() {
    this.gridFetch.getAll().subscribe(data => {
      this.levels = data;
      this.gridFetch.nbLvl = this.levels.length;
    });
  }

}
