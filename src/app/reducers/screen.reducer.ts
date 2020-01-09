import { ScreenActions, ScreenActionTypes } from '../actions/screen.actions';


export interface ScreenState {
  isSmallScreen: boolean;
}

export const initialState: ScreenState = {
  isSmallScreen: true
};

export function ScreenSizeReducer(state: ScreenState = initialState, action: ScreenActions): ScreenState {
  switch (action.type) {
    case ScreenActionTypes.ChangeSize:
      return {
        isSmallScreen:  action.payload.width < 640,
      };
      break;
    default:
      return state;
  }
}
