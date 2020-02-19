import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CourseCategory } from '../_models/courseCategory';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {
  private baseUrl = 'http://localhost:5000/api/coursecategories';

  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable< CourseCategory> {
    return this.http.get< CourseCategory>(this.baseUrl);
  }
}
