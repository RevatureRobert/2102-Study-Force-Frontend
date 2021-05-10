import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        TopicService
      ]
    });
    service = TestBed.inject(TopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
