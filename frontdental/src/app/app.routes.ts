import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'patient-appointment', component: PatientAppointmentComponent},
  { path: 'appointment-history', component: AppointmentHistoryComponent},
  { path: '**', component: PageNotFoundComponent}, 
];
