import { TestBed, inject } from '@angular/core/testing';

import { DeliverymenService } from './deliverymen.service';

describe('DeliverymenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliverymenService]
    });
  });

  it('should be created', inject([DeliverymenService], (service: DeliverymenService) => {
    expect(service).toBeTruthy();
  }));
});
