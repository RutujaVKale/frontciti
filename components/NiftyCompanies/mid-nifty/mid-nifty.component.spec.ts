import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidNiftyComponent } from './mid-nifty.component';

describe('MidNiftyComponent', () => {
  let component: MidNiftyComponent;
  let fixture: ComponentFixture<MidNiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidNiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidNiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
