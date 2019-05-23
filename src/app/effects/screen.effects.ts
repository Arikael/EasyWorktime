import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';



@Injectable()
export class ScreenEffects {



  constructor(private actions$: Actions) {}

  @Effect()
  resizeWindow = fromEvent(window, 'resize').pipe(
    debounceTime(500),
    map(event: any) => )
  })

}
