import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Major } from '../_models/major';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  formData: Major;
  formData1: User;
  list: Major[];
  list1: User[];
  constructor(private api: ApiService, private http: HttpClient) { }

  getAll(): Observable<Major> {
    return this.http.get<Major>(this.api.url.majors);
  }
}
