import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimesDesktopComponent } from './worktimes-desktop.component';

describe('WorktimesDesktopComponent', () => {
  let component: WorktimesDesktopComponent;
  let fixture: ComponentFixture<WorktimesDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimesDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
