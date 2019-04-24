import { TestBed } from '@angular/core/testing';

import { LevelService } from './level.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LevelService]
  }));

  it('should be created', () => {
    const service: LevelService = TestBed.get(LevelService);
    expect(service).toBeTruthy();
  });
});
