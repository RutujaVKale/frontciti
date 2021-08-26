import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNiftyComponent } from './small-nifty.component';

describe('SmallNiftyComponent', () => {
  let component: SmallNiftyComponent;
  let fixture: ComponentFixture<SmallNiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallNiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
