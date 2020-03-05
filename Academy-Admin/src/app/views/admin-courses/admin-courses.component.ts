import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { CourseCategory } from '../../_models/courseCategory';
import { CourseCategoryService } from '../../_services/course-category.service';

@ Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  // listCourseCategory: CourseCategory;
  // addForm: FormGroup;
  constructor(private service: CourseCategoryService,
              private fb: FormBuilder) { }

  ngOnInit() {
    // this.createForm();
    // this.service.getAll().subscribe(data => this.listCourseCategory  = data);
    // this.refreshList();
  }
  // createForm() {
  //   this.addForm = this.fb.group({
  //     cate_Name: ['', Validators.required],
  //     cate_Alias: ['', Validators.required],
  //     cate_Description: ['', Validators.required],
  //     status: 1
  //   });
  // }
  // createSubmitForm() {
  //   if ( this.addForm.valid) {
  //     this.listCourseCategory = Object.assign({}, this.addForm.value);
  //     this.service.addCourseCategories(this.listCourseCategory).subscribe(() => {
  //       console.log('success');
  //       this.refreshList();
  //     }, error => {
  //       console.log('fail');
  //     });
  //   }
  // }
  // refreshList() {
  //   return this.service.getAll().subscribe(data => this.listCourseCategory = data);
  // }
}
