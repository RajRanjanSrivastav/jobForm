import { TestBed } from '@angular/core/testing';

import { NdmajobService } from './ndmajob.service';

describe('NdmajobService', () => {
  let service: NdmajobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NdmajobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
