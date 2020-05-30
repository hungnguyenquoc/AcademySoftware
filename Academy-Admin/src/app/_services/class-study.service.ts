import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ClassStudy } from '../_models/classStudy';
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
export class ClassStudyService {

  constructor(private api: ApiService, private http: HttpClient) { }

  getClasses(): Observable<ClassStudy[]> {
    return this.http.get<ClassStudy[]>(this.api.url.classes + '/', httpOptions);
  }

  getClass(id): Observable<ClassStudy> {
    return this.http.get<ClassStudy>(this.api.url.classes + '/' + id, httpOptions);
  }
  addClass(model: any) {
    const body = JSON.stringify(model);
    return this.http.post(this.api.url.classes + '/', body , httpOptions).pipe(map(res => res));
  }
  //
  createClass(optionId, model: any) {
    // let params = new HttpParams().set('optionId', optionId);
    return this.http.post(`${this.api.url.classes}/${optionId}`, model, httpOptions);
  }
  updateClass(id, model: any) {
    return this.http.put(this.api.url.classes + '/' + id, model  , httpOptions);
  }
}
