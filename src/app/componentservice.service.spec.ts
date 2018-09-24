import { TestBed, inject } from '@angular/core/testing';

import { ComponentserviceService } from './componentservice.service';

describe('ComponentserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentserviceService]
    });
  });

  it('should be created', inject([ComponentserviceService], (service: ComponentserviceService) => {
    expect(service).toBeTruthy();
  }));
});
