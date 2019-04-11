import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { GridStateService } from '../grid-state.service';
import { Grille } from '../grille';
import { TranslateModule } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let gridStateStub: Partial<GridStateService>;

  beforeEach(async(() => {
    gridStateStub = {
      grille: new Grille(5)
    };

    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [ GridStateService ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
