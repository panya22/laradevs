import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  imagePath: string = 'assets/img/checkapp_logo.png'
  items: {icon: string; title: string; link: string} [] = [
    {icon: 'team_dashboard', title: 'Dashboard', link: 'dashboard'},
    {icon: 'book_online', title: 'Patient Appointment', link: 'patient-appointment'},
    {icon: 'history', title: 'Appointment History', link: 'appointment-history'},
  ];
}
