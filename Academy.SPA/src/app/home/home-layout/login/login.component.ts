import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any  = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe( next => {
      this.alertify.success('Đăng nhập thành công');
    }, error => {
      this.alertify.error('Đăng nhập không thành cồn');
    }, () => {
      this.router.navigate(['/admin']);
    });
  }
  loggedIn() {
    const tokenString = localStorage.getItem('tokenString');
    return !!tokenString;
  }
  logout() {
    localStorage.removeItem('tokenString');
    console.log('đã đăng xuất');
  }
}
