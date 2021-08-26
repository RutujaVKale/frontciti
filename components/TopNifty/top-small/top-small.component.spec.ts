import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSmallComponent } from './top-small.component';

describe('TopSmallComponent', () => {
  let component: TopSmallComponent;
  let fixture: ComponentFixture<TopSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
