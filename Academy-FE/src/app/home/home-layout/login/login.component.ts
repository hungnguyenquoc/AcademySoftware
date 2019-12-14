import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@ Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      // console.log('Logged in successfully');
      this.toastr.success('Đăng nhập thành công');
    }, error => {
      // console.log('failed to logging');
      this.toastr.error('Đăng nhập không thành công');
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
    console.log('logged out');
  }
}
