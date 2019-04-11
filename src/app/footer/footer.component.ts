import { Component, OnInit, Input } from '@angular/core';
import { GridStateService } from '../grid-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  static readonly OK_MESSAGE = 'OK';
  static readonly ERROR_MESSAGE = 'Erreur';
  @Input() gridState: GridStateService;

  message = '';
  answerState = 'answer-hidden';

  constructor() { }

  ngOnInit() {
  }

  verif() {
    const win = this.gridState.verifProgress();

    if (win) {
      this.message = FooterComponent.OK_MESSAGE;
    } else {
      this.message = FooterComponent.ERROR_MESSAGE;
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
