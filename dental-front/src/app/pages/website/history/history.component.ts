import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterLink, MatTableModule, HttpClientModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
  providers: [DataService],
})
export class HistoryComponent implements OnInit {
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {}

  onLogout() {
    const authToken = localStorage.getItem('auth_token');

    // Include the authentication token in the request headers
    const headers = { Authorization: `Bearer ${authToken}` };

    this.ds.postRequest('logout', { headers }).subscribe((res: any) => {
      localStorage.removeItem('auth_token');
      // Navigate to the login page
      this.router.navigate(['/login']);
    });
  }
}
