import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManFormComponentComponent } from './delivery-man-form-component.component';

describe('DeliveryManFormComponentComponent', () => {
  let component: DeliveryManFormComponentComponent;
  let fixture: ComponentFixture<DeliveryManFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryManFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
