import { TestBed } from '@angular/core/testing';

import { Filespace } from './filespace';

describe('Filespace', () => {
  let service: Filespace;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filespace);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
