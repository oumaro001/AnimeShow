import { TestBed } from '@angular/core/testing';

import { AnimeApiService } from './animeApi.service';

describe('AppService', () => {
  let service: AnimeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
