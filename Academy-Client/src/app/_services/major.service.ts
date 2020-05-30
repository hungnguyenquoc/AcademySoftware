import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Major } from '../_models/major';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  constructor(private api:  ApiServiceService
              // tslint:disable-next-line:align
              , private http: HttpClient) { }

  getMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(this.api.url.majors  + '/');
  }
  getMajor(id: number): Observable<Major> {
    return this.http.get<Major>(this.api.url.majors + '/' + id );
  }
}
