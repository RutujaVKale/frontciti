import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLargeComponent } from './top-large.component';

describe('TopLargeComponent', () => {
  let component: TopLargeComponent;
  let fixture: ComponentFixture<TopLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
