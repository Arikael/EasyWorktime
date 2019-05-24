import { Action } from '@ngrx/store';

export enum ScreenActionTypes {
  ChangeSize = '[Screen] Change ScreenSize'
}

export interface ChangeScreenSizePayload {
  width: number;
  height: number;
}

export class ChangeScreenSize implements Action {
  readonly type = ScreenActionTypes.ChangeSize;

  constructor(public payload: ChangeScreenSizePayload) {
  }
}

export type ScreenActions = ChangeScreenSize;
