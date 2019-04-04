import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyChoiceComponent } from './difficulty-choice.component';
import { FormsModule } from '@angular/forms';
import { GridStateService } from '../grid-state.service';

describe('DifficultyChoiceComponent', () => {
  let component: DifficultyChoiceComponent;
  let fixture: ComponentFixture<DifficultyChoiceComponent>;
  let gridState: GridStateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyChoiceComponent ],
      imports: [
        FormsModule
      ],
      providers: [ GridStateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyChoiceComponent);
    component = fixture.componentInstance;
    gridState =  fixture.debugElement.injector.get(GridStateService);
    fixture.detectChanges();
  });

});
