import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../crud/crud.component';
export const routes: Routes = [
  { path: '', component: CrudComponent },
  //   { path: 'election-poll', component: ElectionPollComponent },
  //   { path: 'candidates', component: CandidatesComponent },
  //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
