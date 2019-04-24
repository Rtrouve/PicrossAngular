import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';
import { ActivatedRoute } from '@angular/router';
import { GridStateService } from '../grid-state.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-level-display',
  templateUrl: './level-display.component.html',
  styleUrls: ['./level-display.component.css']
})
export class LevelDisplayComponent implements OnInit {
  isFetched = false;
  previousEnable = true;
  nextEnable = true;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private gridFetch: LevelService,
    private gridState: GridStateService,
    private location: Location) { }

  ngOnInit() {

    this.route.params.subscribe((params: {id: string}) => {
      this.id = +params.id;
      this.previousEnable = !(this.id === 1);
      this.nextEnable = !(this.id === this.gridFetch.nbLvl);

      this.gridFetch.get(this.id)
        .subscribe(grid => {
          this.gridState.loadGrid(grid);
          this.isFetched = true;
        });
    });
  }

  goBack() {
    this.location.back();
  }
}
