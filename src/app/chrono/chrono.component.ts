import { Component, OnInit } from '@angular/core';
import { GridStateService } from '../grid-state.service';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {
  TIMEPERIOD = 100;

  scoreMax = 0;

  remainingTime: number = this.TIMEPERIOD;
  interval;
  running = false;

  constructor(public gridState: GridStateService) { }

  ngOnInit() {
    this.gridState.generateGrid(5, true);
  }

  startTimer() {
    this.gridState.generateGrid(5, true);
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        if (this.scoreMax < this.gridState.countResolve) {
          this.scoreMax = this.gridState.countResolve;
        }
      } else {
        this.stopTimeTrial();
      }
    }, 1000);
    this.running = true;
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.remainingTime = this.TIMEPERIOD;
  }

  stopTimeTrial() {
    this.running = false;
    this.pauseTimer();
    this.gridState.countResolve = 0;
  }

}
