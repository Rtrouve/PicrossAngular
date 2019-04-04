import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoComponent } from './chrono.component';
import { DisplayGridComponent } from '../display-grid/display-grid.component';
import { FormsModule } from '@angular/forms';

describe('ChronoComponent', () => {
  let component: ChronoComponent;
  let fixture: ComponentFixture<ChronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChronoComponent,
        DisplayGridComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
