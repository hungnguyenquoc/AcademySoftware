import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@ Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  confirmEmailUrl = 'http://localhost:4200/#/confirm-email';
  changePasswordUrl = 'test.com';
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('tokenString', user.tokenString);
          this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
          console.log(this.decodedToken);
        }
      })
    );
  }

  // register for user
  register(user: User) {
    const headers = new HttpHeaders({
      'confirmEmailUrl' : this.confirmEmailUrl
    });
    const options = { headers: headers};
    return this.http.post(this.baseUrl + 'register', user, options);
  }
  // reset password
  resetPassword(model: any) {
    const headers = new HttpHeaders({
      'changePasswordUrl': this.changePasswordUrl
    });
    const options = {headers: headers};
    return this.http.post(this.baseUrl + 'resetpassword', model, options);
  }
  // confirmEmail for register
  confirmEmail(user: User) {
    return this.http.post(this.baseUrl + 'confirmemail', user);
  }

  //
  loggedIn() {
    const token = localStorage.getItem('tokenString');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
