import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesstAlertComponent } from './successt-alert.component';

describe('SuccesstAlertComponent', () => {
  let component: SuccesstAlertComponent;
  let fixture: ComponentFixture<SuccesstAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesstAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesstAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
