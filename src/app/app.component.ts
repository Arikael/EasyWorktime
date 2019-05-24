import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store, ActionReducer, select } from '@ngrx/store';
import { ScreenState } from './reducers/screen.reducer';
import { ChangeScreenSize } from './actions/screen.actions';
import { AppState } from './reducers';

export const getScreenSize = (state: AppState) => state.screen;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EasyWorktime';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new ChangeScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
  }

  ngOnInit(): void {
    this.store.pipe(select(getScreenSize))
    .subscribe((screen: ScreenState) => console.log(screen));
  }
}
