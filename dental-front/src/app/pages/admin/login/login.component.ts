import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [DataService],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {}

  onLogin() {
    this.ds
      .postRequest('user/login', { email: this.email, password: this.password })
      .subscribe(
        (res: any) => {
          const test = localStorage.setItem('auth_token', res.access_token);
          this.router.navigate(['history']);
          console.log(res);
          console.log(test);
        },
        (error: any) => {
          console.error('Login failed', error);
        }
      );
  }
}
