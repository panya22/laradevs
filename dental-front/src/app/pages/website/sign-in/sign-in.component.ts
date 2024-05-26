import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [DataService],
})
export class SignInComponent implements OnInit {
  showLogin: boolean = true;
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {}

  onLogin() {
    this.ds
      .postRequest('user/login', { email: this.email, password: this.password })
      .subscribe(
        (res: any) => {
          localStorage.setItem('auth_token', res);
          this.router.navigate(['history']);
        },
        (error: any) => {
          console.error('Login failed', error);
        }
      );
  }

  onSignUp() {
    this.ds
      .postRequest('user/register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res: any) => {
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Registration failed', error);
        }
      );
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }
}
