import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMidComponent } from './top-mid.component';

describe('TopMidComponent', () => {
  let component: TopMidComponent;
  let fixture: ComponentFixture<TopMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
