import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import Swal from 'sweetalert2';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  model: any = {};
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(public authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
  loggedIn() {
    const tokenString = localStorage.getItem('tokenString');
    return !!tokenString;
  }

  logout() {
    localStorage.removeItem('tokenString');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    // this.alertify.message('logged out');
    this.router.navigate(['/login']);
  }
  viewUserDetail() {
    this.router.navigate(['/admin-user/admin-user-edit/']);
  }
}
