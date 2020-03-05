import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@ Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  model: any  = {};
  constructor(public authService: AuthService, 
              private alertify: AlertifyService, 
              private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe( next => {
      // this.alertify.success('Đăng nhập thành công');
      console.log('success');
    }, error => {
      // this.alertify.error('Đăng nhập không thành cồn');
      console.log('fail');
    }, () => {
      this.router.navigate(['/dashboard']);
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
