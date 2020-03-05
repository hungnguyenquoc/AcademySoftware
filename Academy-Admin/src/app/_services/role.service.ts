import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<Role> {
    return this.http.get<Role>(this.api.url.roles);
  }
}
