import { TestBed } from '@angular/core/testing';

import { RegisterservicesService } from './registerservices.service';

describe('RegisterservicesService', () => {
  let service: RegisterservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
