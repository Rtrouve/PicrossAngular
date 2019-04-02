import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyChoiceComponent } from './difficulty-choice.component';

describe('DifficultyChoiceComponent', () => {
  let component: DifficultyChoiceComponent;
  let fixture: ComponentFixture<DifficultyChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
