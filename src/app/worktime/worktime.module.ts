import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorktimeEntryComponent } from './worktime-entry/worktime-entry.component';
import { WorktimeRoutingModule } from './worktime-routing.module';
import { WorktimesComponent } from './worktimes/worktimes.component';
import { WorktimesMobileComponent } from './worktimes-mobile/worktimes-mobile.component';
import { WorktimesDesktopComponent } from './worktimes-desktop/worktimes-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    WorktimeRoutingModule
  ],
  declarations: [
    WorktimeEntryComponent,
    WorktimesComponent,
    WorktimesMobileComponent,
    WorktimesDesktopComponent
  ]
})
export class WorktimeModule { }
