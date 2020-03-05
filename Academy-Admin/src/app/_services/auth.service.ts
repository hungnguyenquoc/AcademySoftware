import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
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
  // getAllListForUser(): Observable< User>{
  //   return this.http.get<User>(this.baseUrl + 'register');
  // }

  //
  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('tokenString');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
