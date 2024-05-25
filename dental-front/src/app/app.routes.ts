import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { PatientAppointmentComponent } from './pages/admin/patient-appointment/patient-appointment.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PatientHistoryComponent} from './pages/admin/patient-history/patient-history.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AppointmentComponent } from './pages/website/appointment/appointment.component';
import { PendingComponent } from './pages/admin/pending/pending.component';
import { SignInComponent } from './pages/website/sign-in/sign-in.component';
import { HistoryComponent } from './pages/website/history/history.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'booking',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'booking',
        component: LandingComponent,
    },
    {
        path: 'appointment',
        component: AppointmentComponent,
    },
    {
        path: 'sign-in',
        component: SignInComponent,
    },
    {
        path: 'history',
        component: HistoryComponent,
    },
    {
        path: '',
        component: SidebarComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'patient-appointment',
                component: PatientAppointmentComponent
            },
            {
                path: 'patient-history',
                component: PatientHistoryComponent
            },
            {
                path: 'pending',
                component: PendingComponent
            }
        ]
    }
];
