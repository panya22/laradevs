import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavRoutingModule } from './nav.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NavRoutingModule,
    RouterLinkActive,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
