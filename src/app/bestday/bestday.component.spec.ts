import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdayComponent } from './bestday.component';

describe('BestdayComponent', () => {
  let component: BestdayComponent;
  let fixture: ComponentFixture<BestdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
