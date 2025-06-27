import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSection } from './product-detail-section';

describe('ProductDetailSection', () => {
  let component: ProductDetailSection;
  let fixture: ComponentFixture<ProductDetailSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
