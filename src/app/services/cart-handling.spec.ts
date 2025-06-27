import { TestBed } from '@angular/core/testing';

import { CartHandling } from './cart-handling';

describe('CartHandling', () => {
  let service: CartHandling;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartHandling);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
