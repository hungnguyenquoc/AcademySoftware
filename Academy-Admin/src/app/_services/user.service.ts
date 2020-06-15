import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('tokenString')
  })
};

@Injectable({
  providedIn: 'root'
})



export class UserService {
  // baseUrl: 'http://localhost:5000/api/users';
  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable< User> {
    return this.http.get< User>(this.api.url.users, httpOptions);
  }
  getUser(id): Observable<User> {
    return this.http.get<User>(this.api.url.users + '/' + id);
  }
  // getUserForId(id): Observable<User> {
  //   return this.http.get<User>(this.api.url.users + '/' + id, httpOptions);
  // }
  updateUser(id, model: any) {
    return this.http.put(this.api.url.users + '/' + id, model, httpOptions);
  }
  // getCourse(id): Observable<Course> {
  //   return this.http.get<Course>(this.api.url.courses + '/' + id, httpOptions);
  // }
  // addCourse(model: any): Observable<Course> {
  //   return this.http.post<Course>(this.api.url.courses + '/', model, httpOptions).pipe(map(res => res));
  // }
  // updateCourse(id, model: any) {
  //   return this.http.put(this.api.url.courses + '/' + id, model  , httpOptions);
  // }
}
