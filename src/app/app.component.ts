import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ChangeScreenSize } from './actions/screen.actions';
import { WorktimeEntryStore } from './worktime/state/worktime-entry.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EasyWorktime';
  isSmallScreen?: boolean;

  constructor(private store: WorktimeEntryStore) {

    this.store.update({
      ui:
    })
    this.store.dispatch(new ChangeScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
  }

  ngOnInit(): void {
    fromEvent(window, 'resize').pipe(
      debounceTime(500),
      map(event => new ChangeScreenSize({
        width: (event.target as Window).innerWidth,
        height: (event.target as Window).innerHeight
      })));
  }
}

