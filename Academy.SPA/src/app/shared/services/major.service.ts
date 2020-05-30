import { Injectable } from '@angular/core';
import { Major } from '../models/major';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private api: ApiService, private http: HttpClient) { }
  getMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(this.api.url.majors);
  }
  getMajor(id: number): Observable<Major> {
    return this.http.get<Major>(this.api.url.majors + id);
  }
}
