import { Action } from '@ngrx/store';

export enum ScreenActionTypes {
  IncreaseSize = '[Screen] Increase ScreenSize',
  DecreaseSize = '[Screen] Decrease ScreenSize',
  ChangeSize = '[Screen] Change ScreenSize'
  
}

export class IncreaseSize implements Action {
  readonly type = ScreenActionTypes.IncreaseSize;
}

export class DecreaseSize implements Action {
  readonly type = ScreenActionTypes.DecreaseSize;
}

export class ChangeSize implements Action {
  readonly type = ScreenActionTypes.ChangeSize;

  constructor(public payload: { event: any}) {

  }
}


export type ScreenActions = IncreaseSize | DecreaseSize;
