import { TestBed, inject } from '@angular/core/testing';

import { ProgramStudyService } from './program-study.service';

describe('ProgramStudyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramStudyService]
    });
  });

  it('should be created', inject([ProgramStudyService], (service: ProgramStudyService) => {
    expect(service).toBeTruthy();
  }));
});
