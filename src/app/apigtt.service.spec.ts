import { TestBed } from '@angular/core/testing';

import { ApigttService } from './apigtt.service';

describe('ApigttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApigttService = TestBed.get(ApigttService);
    expect(service).toBeTruthy();
  });
});
