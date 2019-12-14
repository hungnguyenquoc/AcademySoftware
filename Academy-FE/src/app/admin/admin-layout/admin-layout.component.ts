import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('tokenString');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('tokenString');
    this.toastr.success('Đăng xuất thành công');
    this.router.navigate(['/']);
  }
}
