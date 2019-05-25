import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimesMobileComponent } from './worktimes-mobile.component';

describe('WorktimesMobileComponent', () => {
  let component: WorktimesMobileComponent;
  let fixture: ComponentFixture<WorktimesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
