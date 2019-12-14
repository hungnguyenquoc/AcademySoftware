// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @ Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

// baseUrl = 'http://localhost:5000/api/auth/';
// jwtHelper = new JwtHelperService();
// decodedToken: any;

// constructor(private http: HttpClient) { }

// login(model: any) {
//   return this.http.post(this.baseUrl + 'login', model).pipe(
//     map((response: any) => {
//       const user = response;
//       if (user) {
//         localStorage.setItem('tokenString', user.tokenString);
//         // this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
//         // console.log(this.decodedToken);
//       }
//     })
//   );
// }
// }

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable({
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

// register(model: any) {
//   return this.http.post(this.baseUrl + 'register', model);
// }

loggedIn() {
  const token = localStorage.getItem('tokenString');
  return !this.jwtHelper.isTokenExpired(token);
}
}
