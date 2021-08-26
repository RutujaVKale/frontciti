import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNiftyComponent } from './large-nifty.component';

describe('LargeNiftyComponent', () => {
  let component: LargeNiftyComponent;
  let fixture: ComponentFixture<LargeNiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeNiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeNiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
