import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Role } from '../_models/role';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('tokenString')
  })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.api.url.roles, httpOptions);
  }
  getRole(id): Observable<Role> {
    return this.http.get<Role>(this.api.url.roles + '/' + id, httpOptions);
  }
  addRole(model: any) {
    return this.http.post<Role>(this.api.url.roles + '/', model, httpOptions);
  }
  deleteRole(id: number) {
    return this.http.delete<Role>(this.api.url.roles + '/' + id, httpOptions);
  }
}
