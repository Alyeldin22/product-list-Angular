import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSection } from './cart-section';

describe('CartSection', () => {
  let component: CartSection;
  let fixture: ComponentFixture<CartSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
