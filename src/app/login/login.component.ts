import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    //BrowserAnimationsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authservice: AuthService) {}
  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    if (
      this.email.trim() === 'admin@gmail.com' &&
      this.password.trim() === '123456'
    ) {
      this.authservice.login();
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Tên đăng nhập hoặc mật khẩu sai';
    }
  }

  ngOnInit() {}
}
