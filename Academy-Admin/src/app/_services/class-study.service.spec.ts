import { TestBed } from '@angular/core/testing';

import { ClassStudyService } from './class-study.service';

describe('ClassStudyService', () => {
  let service: ClassStudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassStudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
