import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
  { path: 'crud', component: CrudComponent },

  { path: '', pathMatch: 'full', component: NavComponent },
];
