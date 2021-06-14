import { TestBed } from '@angular/core/testing';

import { MusicaServiceService } from './musica-service.service';

describe('MusicaServiceService', () => {
  let service: MusicaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
