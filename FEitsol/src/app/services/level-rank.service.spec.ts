import { TestBed } from '@angular/core/testing';

import { LevelRankService } from './level-rank.service';

describe('LevelRankService', () => {
  let service: LevelRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
