import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperSection } from './wrapper-section';

describe('WrapperSection', () => {
  let component: WrapperSection;
  let fixture: ComponentFixture<WrapperSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
