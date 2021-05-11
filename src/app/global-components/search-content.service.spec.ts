import { TestBed } from '@angular/core/testing';

import { SearchContentService } from './search-content.service';

describe('SearchServiceService', () => {
  let service: SearchContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
