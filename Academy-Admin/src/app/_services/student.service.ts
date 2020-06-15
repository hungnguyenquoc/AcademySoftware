import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../_models/student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
// export interface Student {
//     id: number;
//     stu_Code: string;
//     stu_Fullname: string;
//     stu_Gender: string;
//     dateOfBirth: Date;
//     stu_Phone: string;
//     stu_Email: string;
//     stu_Facebook: string;
//     identity_Card: string;
//     classId: number;
//     createdDate: Date;
//     createdBy: string;
//     updatedDate: Date;
//     updatedBy: string;
//     source: string;
//     File: File;
// }
interface ResponseStudents {
  results: Student[];
}
@Injectable({
  providedIn: 'root'
})




export class StudentService {

  constructor(private api: ApiService, private http: HttpClient) { }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.api.url.students + '/' + 'getStudents', httpOptions);
  }
  // get student official not status = 1;
  getStudentsOfficial(): Observable<Student[]> {
    return this.http.get<Student[]>(this.api.url.students + '/' + 'studentOfficial', httpOptions);
  }
  // get studentForPagination
  // getStudentsPagination(pageIndex: number, pageSize: number) {
  //   return this.http.get('http://localhost:5000/api/students/getStudentPagination' +
  //       '/' + pageIndex + '/' + pageSize, httpOptions).pipe(map(res => res as Student[]));
  // }
  getStudentsPagination(pageIndex: number, pageSize: number) {
    return this.http.get('http://localhost:5000/api/students/getStudentPagination' +
        '/' + pageIndex + '/' + pageSize, httpOptions).pipe(map(res => res as Student[] || []));
  }
  //
  getStudent(id): Observable<Student> {
    return this.http.get<Student>(this.api.url.students + '/' + id, httpOptions);
  }
  addStudent(model: any): Observable<Student> {
    return this.http.post<Student>(this.api.url.students + '/', model, httpOptions).pipe(map(res => res));
  }
  updateStudent(id, model: any) {
    return this.http.put(this.api.url.students + '/' + id, model  , httpOptions);
  }
}
