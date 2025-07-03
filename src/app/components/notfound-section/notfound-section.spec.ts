import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundSection } from './notfound-section';

describe('NotfoundSection', () => {
  let component: NotfoundSection;
  let fixture: ComponentFixture<NotfoundSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
