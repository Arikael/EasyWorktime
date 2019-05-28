import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorktimeActionTypes, LoadWorktimes } from '../actions/worktime.actions';
import { WorktimeService } from '../worktime/worktime.service';
import { mergeMap, map } from 'rxjs/operators';
import { WorktimeEntry } from '../worktime/worktime-entry';



@Injectable()
export class WorktimeEffects {

  @Effect()
  worktimes = this.actions$.pipe(
    ofType(WorktimeActionTypes.LoadWorktimes),
    mergeMap((action: LoadWorktimes) => {
      return this.worktimeService.getWorktimes(action.payload.earliestDate).pipe(
        map((worktimes: WorktimeEntry[]) => {
          return {
            type: WorktimeActionTypes.LoadWorktimesSuccess,
            payload: worktimes
          };
        })
      );
    })
  );

  constructor(private actions$: Actions, private worktimeService: WorktimeService) {}

}
