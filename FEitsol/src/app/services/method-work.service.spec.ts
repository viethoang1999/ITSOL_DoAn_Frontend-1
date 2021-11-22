import { TestBed } from '@angular/core/testing';

import { MethodWorkService } from './method-work.service';

describe('MethodWorkService', () => {
  let service: MethodWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
