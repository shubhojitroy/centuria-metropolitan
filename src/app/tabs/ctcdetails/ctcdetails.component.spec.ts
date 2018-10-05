import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcdetailsComponent } from './ctcdetails.component';

describe('CtcdetailsComponent', () => {
  let component: CtcdetailsComponent;
  let fixture: ComponentFixture<CtcdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtcdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
