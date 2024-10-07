import { TestBed } from '@angular/core/testing';

import { DepartmentsDataService } from './departments-data.service';

describe('DepartmentsDataService', () => {
  let service: DepartmentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
