import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewMarketComponent } from './register-new-deliveryman.component';

describe('RegisterNewMarketComponent', () => {
  let component: RegisterNewMarketComponent;
  let fixture: ComponentFixture<RegisterNewMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
