import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTest1Component } from './child-test1.component';

describe('ChildTest1Component', () => {
  let component: ChildTest1Component;
  let fixture: ComponentFixture<ChildTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
