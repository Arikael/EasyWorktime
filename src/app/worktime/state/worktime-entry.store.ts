import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { WorktimeEntry } from './worktime-entry.model';

export interface WorktimeEntryState extends EntityState<WorktimeEntry> {
  ui: {
    isSmallScreen: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'worktimes'
})
export class WorktimeEntryStore extends EntityStore<WorktimeEntryState, WorktimeEntry> {


  constructor() {
    super();
  }
}
