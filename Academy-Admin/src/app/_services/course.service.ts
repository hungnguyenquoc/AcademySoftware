import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Course } from '../_models/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private api: ApiService, private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.api.url.courses + '/', httpOptions);
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(this.api.url.courses + '/' + id, httpOptions);
  }
  addCourse(model: any): Observable<Course> {
    return this.http.post<Course>(this.api.url.courses + '/', model, httpOptions).pipe(map(res => res));
  }
  updateCourse(id, model: any) {
    return this.http.put(this.api.url.courses + '/' + id, model  , httpOptions);
  }
}
