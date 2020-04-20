import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { ProgramStudy } from '../_models/programStudy';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};
const name = [];
@Injectable({
  providedIn: 'root'
})
export class ProgramStudyService {
  formData: ProgramStudy;
  programsList: ProgramStudy[];
  constructor(private http: HttpClient, private api: ApiService) {}
  getProgramStudies(): Observable<ProgramStudy[]> {
    return this.http.get<ProgramStudy[]>(this.api.url.programstudies);
  }
  getProgramStudy(id: number): Observable<ProgramStudy> {
    return this.http.get<ProgramStudy>(
      this.api.url.programstudies + id,
      httpOptions
    );
  }
  addProgramStudy(formData: ProgramStudy) {
    return this.http.post<ProgramStudy[]>(
      this.api.url.programstudies, formData,
      httpOptions
    );
  }
  //
  isProgramStudyExist( code: string): Observable<Boolean> {
    const pro_Name = name.includes(code);
    for (const pro of this.programsList) {
      if (pro.pro_Name.toLowerCase() === code.toLowerCase()) {
        return of(pro_Name);
      }
    }
  }
  refreshList() {
    this.http.get(this.api.url.programstudies).toPromise().then(
      res => this.programsList = res as ProgramStudy[]);
  }
  // function check exist programStudyName
  // checkProName(code: string): boolean {
  //   if (this.programsList === null) {
  //     return true;
  //   }
  //   if (code === '' || code === null) {
  //     return true;
  //   }
  //   for (const pro of this.programsList) {
  //     if (pro.pro_Name.toLowerCase() === code.toLowerCase()) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
