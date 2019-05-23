import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorktimeEntryComponent } from './worktime-entry/worktime-entry.component';
import { WorktimeRoutingModule } from './worktime-routing.module';
import { WorktimesComponent } from './worktimes/worktimes.component';

@NgModule({
  imports: [
    CommonModule,
    WorktimeRoutingModule
  ],
  declarations: [
    WorktimeEntryComponent,
    WorktimesComponent
  ]
})
export class WorktimeModule { }
