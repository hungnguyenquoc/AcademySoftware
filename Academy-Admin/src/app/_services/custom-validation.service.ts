import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Major } from '../_models/major';
import { AbstractControl } from '@angular/forms';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http: HttpClient, private api: ApiService) { }
  // Hàm gọi validate của các form.
  //
  // Validate kiểm tra trung tên khóa học
   validateCourseName(control: AbstractControl) {
    return this.checkCourseNameExist(control.value).pipe(
      map(res => {
        return res ? null : { courseNameTaken: true };
      })
    );
  }
  //
  validateCourseCode(control: AbstractControl) {
    return this.checkCourseCodeExist(control.value).pipe(
      map(res => {
        return res ? null : { courseCodeTaken: true };
      })
    );
  }
  // Validate kiểm tra trung tên
  validateMajorName(control: AbstractControl) {
    return this.checkMajorNameExist(control.value).pipe(
      map(res => {
        return res ? null : { majorNameTaken: true };
      })
    );
  }
  // Validate kiểm tra trùng mã ngành
  validateMajorCode(control: AbstractControl) {
    return this.checkMajorCodeExist(control.value).pipe(
      map(res => {
        return res ? null : { majorCodeTaken: true};
      })
    );
  }

  // Các hàm để kiểm tra từng validate trong các form.
  //
  // Hàm kiểm tra tên ngành cấm nhập trùng tên khóa học
  checkCourseNameExist(name: string): Observable<boolean> {
    return this.http.get(this.api.url.courses).pipe(
      map((coursesList: Course[]) =>
      coursesList.filter(c => c.couName.toLowerCase() === name.toLowerCase())
      ),
      map(c => !c.length)
    );
  }
  //
  // Hàm kiểm tra mã ngành.
  checkCourseCodeExist(code: string): Observable<boolean> {
    return this.http.get(this.api.url.courses).pipe(
      map((coursesList: Course[]) =>
      coursesList.filter(c => c.couCode.toLowerCase() === code.toLowerCase())
    ),
    map(c => !c.length)
    );
  }
  // Hàm kiểm tra tên ngành cấm nhập trùng tên ngành
  checkMajorNameExist(name: string): Observable<boolean> {
    return this.http.get(this.api.url.majors).pipe(
      map((majorsList: Major[]) =>
        majorsList.filter(ma => ma.maj_Name.toLowerCase() === name.toLowerCase())
      ),
      map(ma => !ma.length)
    );
  }
  // Hàm kiểm tra mã ngành.
  checkMajorCodeExist(code: string): Observable<boolean> {
    return this.http.get(this.api.url.majors).pipe(
      map((majorsList: Major[]) =>
      majorsList.filter(ma => ma.maj_Code.toLowerCase() === code.toLowerCase())
    ),
    map(ma => !ma.length)
    );
  }
  // Hàm kiểm tra nhập ngày bắt đầu và ngày kết thúc của lớp học
}
