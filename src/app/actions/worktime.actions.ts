import { Action } from '@ngrx/store';
import { WorktimeEntry } from '../worktime/worktime-entry';

export enum WorktimeActionTypes {
  LoadWorktimes = '[Worktime] Load Worktimes',
  LoadWorktimesSuccess = '[Worktime] Finished Loading Worktimes',
}

export interface LoadWorktimesPayload {
  earliestDate: Date;
}

export class LoadWorktimes implements Action {
  readonly type = WorktimeActionTypes.LoadWorktimes;

  constructor(public payload: LoadWorktimesPayload) {
  }
}

export class LoadWorktimesSuccess implements Action {
  readonly type = WorktimeActionTypes.LoadWorktimesSuccess;

  constructor(public payload: WorktimeEntry[]) {

  }
}

export type WorktimeActions = LoadWorktimes | LoadWorktimesSuccess;
