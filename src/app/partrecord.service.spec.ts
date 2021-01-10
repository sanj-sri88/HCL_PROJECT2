import { TestBed } from '@angular/core/testing';

import { PartrecordService } from './partrecord.service';

describe('PartrecordService', () => {
  let service: PartrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
