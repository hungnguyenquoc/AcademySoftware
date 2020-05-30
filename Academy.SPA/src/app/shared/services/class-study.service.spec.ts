import { TestBed, inject } from '@angular/core/testing';

import { ClassStudyService } from './class-study.service';

describe('ClassStudyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassStudyService]
    });
  });

  it('should be created', inject([ClassStudyService], (service: ClassStudyService) => {
    expect(service).toBeTruthy();
  }));
});
