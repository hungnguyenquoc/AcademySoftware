import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../../_models/courseCategory';
import { CourseCategoryService } from '../../_services/course-category.service';
import { ActivatedRoute } from '@angular/router';

@ Component({
  selector: 'app-admin-course-category',
  templateUrl: './admin-course-category.component.html',
  styleUrls: ['./admin-course-category.component.css']
})
export class AdminCourseCategoryComponent implements OnInit {
  courseCategories: CourseCategory;
  constructor(private courseCategoryService: CourseCategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseCategoryService.getAll().subscribe(data => this.courseCategories = data);
    // this.route.data.subscribe(data => {
    //   this.courseCategories = data['courseCategories'];
    // });
    // console.log(this.courseCategories)
  }

}
