import { TestBed } from '@angular/core/testing';

import { ProgramStudyService } from './program-study.service';

describe('ProgramStudyService', () => {
  let service: ProgramStudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramStudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
