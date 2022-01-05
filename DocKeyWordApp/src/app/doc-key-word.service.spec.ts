import { TestBed } from '@angular/core/testing';

import { DocKeyWordService } from './doc-key-word.service';

describe('DocKeyWordService', () => {
  let service: DocKeyWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocKeyWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
