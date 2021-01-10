import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartRecordComponent } from './part-record.component';

describe('PartRecordComponent', () => {
  let component: PartRecordComponent;
  let fixture: ComponentFixture<PartRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
