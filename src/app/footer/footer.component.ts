import { Component, OnInit, Input } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() gridState: GridStateService;
  message = '';

  answerState = 'answer-hidden';
  commandAnswer = 'Montrez la réponse';

  constructor() { }

  ngOnInit() {
  }

  verif() {
    const win = this.gridState.verifState();

    if (win) {
      this.message = 'Gagné !';
    } else {
      this.message = 'Faux !';
    }

    setTimeout(() =>
      this.message = ''
    , 1000);

    return win;
  }

  show_answer() {
    if (this.answerState === 'answer-hidden') {
      this.answerState = 'answer-shown';
    } else {
      this.answerState = 'answer-hidden';
    }
  }

}
