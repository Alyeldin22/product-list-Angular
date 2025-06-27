import { TestBed } from '@angular/core/testing';

import { FetchProudcts } from './fetch-proudcts';

describe('FetchProudcts', () => {
  let service: FetchProudcts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProudcts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
