import { TestBed, inject } from '@angular/core/testing';

import { ConfidentialResolverService } from './confidential-resolver.service';

describe('ConfidentialResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfidentialResolverService]
    });
  });

  it('should be created', inject([ConfidentialResolverService], (service: ConfidentialResolverService) => {
    expect(service).toBeTruthy();
  }));
});
