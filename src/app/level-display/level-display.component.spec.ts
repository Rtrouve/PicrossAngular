import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDisplayComponent } from './level-display.component';
import { DisplayGridComponent } from '../display-grid/display-grid.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LevelDisplayComponent', () => {
  let component: LevelDisplayComponent;
  let fixture: ComponentFixture<LevelDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LevelDisplayComponent,
        DisplayGridComponent
       ],
       imports: [
        RouterTestingModule,
         TranslateModule.forRoot(),
         HttpClientTestingModule
       ],
       providers: [
         TranslateService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
