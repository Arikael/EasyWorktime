import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorktimeEntry } from './worktime-entry';

@Injectable({
    providedIn: 'root'
})
export class WorktimeService {
    getWorktimes(earliestDate: Date): Observable<WorktimeEntry> {
        return of(null);
    }
}
