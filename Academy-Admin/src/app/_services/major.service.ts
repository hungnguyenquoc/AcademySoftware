import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Major } from '../_models/major';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { idLocale } from 'ngx-bootstrap';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class MajorService {
  formData: Major;
  formData1: User;
  list: Major[];
  constructor(private api: ApiService, private http: HttpClient) { }

  getMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(this.api.url.majors);
  }
  getMajor(id: number): Observable<Major> {
    return this.http.get<Major>(this.api.url.majors + id, httpOptions);
  }
  addMajor(model: any) {
    return this.http.post<Major>(this.api.url.majors, model, httpOptions);
  }
  updateMajor(id, major: Major) {
    return this.http.put<Major>(this.api.url.majors + '/' + id, major, httpOptions);
  }
  deleteMajor(id: number) {
    return this.http.delete<Major>(this.api.url.majors + '/'  + id, httpOptions);
  }
}
