import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeEntryComponent } from './worktime-entry.component';

describe('WorktimeEntryComponent', () => {
  let component: WorktimeEntryComponent;
  let fixture: ComponentFixture<WorktimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
