import { TestBed } from '@angular/core/testing';

import { Teleport } from './teleport';

describe('Teleport', () => {
  let service: Teleport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Teleport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
