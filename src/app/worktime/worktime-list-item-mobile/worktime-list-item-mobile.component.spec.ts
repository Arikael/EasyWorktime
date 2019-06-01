import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeListItemMobileComponent } from './worktime-list-item-mobile.component';

describe('WorktimeListItemMobileComponent', () => {
  let component: WorktimeListItemMobileComponent;
  let fixture: ComponentFixture<WorktimeListItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimeListItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeListItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
