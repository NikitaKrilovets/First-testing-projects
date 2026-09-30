import { TestBed } from '@angular/core/testing';

import { ServerCount } from './server-count';

describe('ServerCount', () => {
  let service: ServerCount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerCount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
