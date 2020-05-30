import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private api: ApiService) { }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.api.url.courses + '/');
  }
  getCourse(id): Observable<Course> {
    return this.http.get<Course>(this.api.url.courses + '/' + id);
  }
}
