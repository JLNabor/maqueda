import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBestdayComponent } from './item-bestday.component';

describe('ItemBestdayComponent', () => {
  let component: ItemBestdayComponent;
  let fixture: ComponentFixture<ItemBestdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBestdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBestdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
