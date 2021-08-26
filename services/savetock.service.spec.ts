import { TestBed } from '@angular/core/testing';

import { SavetockService } from './savetock.service';

describe('SavetockService', () => {
  let service: SavetockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavetockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
