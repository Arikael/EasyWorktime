import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorktimeEntryComponent } from './worktime-edit/worktime-edit.component';
import { WorktimeRoutingModule } from './worktime-routing.module';
import { WorktimesComponent } from './worktimes/worktimes.component';
import { WorktimesMobileComponent } from './worktimes-mobile/worktimes-mobile.component';
import { WorktimesDesktopComponent } from './worktimes-desktop/worktimes-desktop.component';
import { SharedModule } from 'src/shared/shared.module';
import { MatListModule, MatTableModule } from '@angular/material';
import { WorktimeListItemMobileComponent } from './worktime-list-item-mobile/worktime-list-item-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    WorktimeRoutingModule,
    SharedModule,
    MatListModule,
    MatTableModule
  ],
  declarations: [
    WorktimeEntryComponent,
    WorktimesComponent,
    WorktimesMobileComponent,
    WorktimesDesktopComponent,
    WorktimeListItemMobileComponent
  ]
})
export class WorktimeModule { }
