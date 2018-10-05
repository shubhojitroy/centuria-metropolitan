import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityNoticeComponent } from './eligibility-notice.component';

describe('EligibilityNoticeComponent', () => {
  let component: EligibilityNoticeComponent;
  let fixture: ComponentFixture<EligibilityNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
