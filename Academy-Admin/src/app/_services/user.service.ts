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
}
