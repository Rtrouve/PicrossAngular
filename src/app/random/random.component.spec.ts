import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random.component';
import { DifficultyChoiceComponent } from '../difficulty-choice/difficulty-choice.component';
import { DisplayGridComponent } from '../display-grid/display-grid.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DifficultyChoiceComponent,
        DisplayGridComponent,
        FooterComponent,
        RandomComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
