import { TestBed, inject } from '@angular/core/testing';

import { ConfidentialService } from './confidential.service';

describe('ConfidentialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfidentialService]
    });
  });

  it('should be created', inject([ConfidentialService], (service: ConfidentialService) => {
    expect(service).toBeTruthy();
  }));
});
