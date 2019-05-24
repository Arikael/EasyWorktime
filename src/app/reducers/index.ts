import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ScreenSizeReducer, ScreenState } from './screen.reducer';

export interface AppState {
  screen: ScreenState;
}

export const reducers: ActionReducerMap<AppState> = {
  screen: ScreenSizeReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
