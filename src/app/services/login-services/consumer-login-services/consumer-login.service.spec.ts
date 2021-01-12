import { TestBed } from '@angular/core/testing';

import { ConsumerLoginService } from './consumer-login.service';

describe('ConsumerLoginService', () => {
  let service: ConsumerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
