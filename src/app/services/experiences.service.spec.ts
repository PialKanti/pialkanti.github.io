import { TestBed } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
  let service: ExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
