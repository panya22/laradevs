import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  showLogin: boolean = true;

  loginObj: any = {
    userName: '',
    password: ''
  };

  signUpObj: any = {
    fullName: '',
    userName: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.userName == "patient@gmail.com" && this.loginObj.password == "12345") {
      this.router.navigateByUrl('/history');
    } else {
      alert('Wrong Credentials');
    }
  }

  onSignUp() {
    // Add sign-up logic here
    alert('Sign-up functionality to be implemented');
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }
}
