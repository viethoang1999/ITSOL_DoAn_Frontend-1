import { TestBed } from '@angular/core/testing';

import { ResetCodeService } from './reset-code.service';

describe('ResetCodeService', () => {
  let service: ResetCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
