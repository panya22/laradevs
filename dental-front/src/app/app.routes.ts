import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { PatientAppointmentComponent } from './pages/admin/patient-appointment/patient-appointment.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PatientHistoryComponent} from './pages/admin/patient-history/patient-history.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AppointmentComponent } from './pages/website/appointment/appointment.component';

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
            }
        ]
    }
];