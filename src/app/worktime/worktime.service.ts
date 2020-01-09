import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorktimeEntry } from './state/worktime-entry.model';
import { WorktimeEntryStore } from './state/worktime-entry.store';

@Injectable({
  providedIn: 'root'
})
export class WorktimeService {
  constructor(private worktimeEntryStore: WorktimeEntryStore ) {
  }

  getWorktimes(earliestDate: Date): Observable<WorktimeEntry[]> {
    return of([
      {
        date: new Date(),
        morningStart: 700,
        morningEnd: 1220,
        afternoonStart: 1330,
        afternoonEnd: 1720
      }
    ]);
  }
}
