import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { OpenRegister } from '../_models/openRegister';
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
export class OpenRegisterService {

  constructor(private api: ApiService, private http: HttpClient) { }
  getOpenRegisters(): Observable<OpenRegister[]> {
    return this.http.get<OpenRegister[]>(this.api.url.openregisters + '/', httpOptions);
  }

  getOpenRegister(id): Observable<OpenRegister> {
    return this.http.get<OpenRegister>(this.api.url.openregisters + '/' + id, httpOptions);
  }
  addOpenRegister(model: any): Observable<OpenRegister> {
    return this.http.post<OpenRegister>(this.api.url.openregisters + '/', model, httpOptions).pipe(map(res => res));
  }
  updateCourse(id, model: any) {
    return this.http.put(this.api.url.openregisters + '/' + id, model  , httpOptions);
  }
}
