import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedStockByUserComponent } from './saved-stock-by-user.component';

describe('SavedStockByUserComponent', () => {
  let component: SavedStockByUserComponent;
  let fixture: ComponentFixture<SavedStockByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedStockByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedStockByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
