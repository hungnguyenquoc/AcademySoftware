import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { ClassStudy } from '../models/classStudy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassStudyService {

  constructor(private api: ApiService, private http: HttpClient) { }

  getClasses(): Observable<ClassStudy[]> {
    return this.http.get<ClassStudy[]>(this.api.url.classes + '/');
  }

  getClass(id): Observable<ClassStudy> {
    return this.http.get<ClassStudy>(this.api.url.classes + '/' + id);
  }
}
