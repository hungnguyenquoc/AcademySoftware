import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
              private toastr: ToastrService ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.toastr.error('Không thể truy cập');
    this.router.navigate(['/']);
    return false;
  }
}
