import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorktimesComponent } from './worktimes/worktimes.component';

const routes: Routes = [
  {
    path: '',
    component: WorktimesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorktimeRoutingModule { }
