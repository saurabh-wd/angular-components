import { TestBed, inject } from '@angular/core/testing';

import { SharedServiceService } from './shared-service.service';

describe('SharedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedServiceService]
    });
  });

  it('should be created', inject([SharedServiceService], (service: SharedServiceService) => {
    expect(service).toBeTruthy();
  })); 
  it('should have method created', inject([SharedServiceService], (service: SharedServiceService) => {
    expect(service.gettypeAheadData().subscribe(result => expect(result.length).toBeGreaterThan(1)));
  })); 
});
