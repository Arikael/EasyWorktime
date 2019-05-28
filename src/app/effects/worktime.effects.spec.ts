import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WorktimeEffects } from './worktime.effects';

describe('WorktimeEffects', () => {
  let actions$: Observable<any>;
  let effects: WorktimeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorktimeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WorktimeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
