import { TestBed } from '@angular/core/testing';

import { SuperbaseService } from './superbase.service';

describe('SuperbaseService', () => {
  let service: SuperbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
