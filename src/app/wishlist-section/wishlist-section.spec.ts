import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistSection } from './wishlist-section';

describe('WishlistSection', () => {
  let component: WishlistSection;
  let fixture: ComponentFixture<WishlistSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
