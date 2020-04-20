import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../../_models/course';
import { ProgramStudy } from '../../../_models/programStudy';
import { CourseService } from '../../../_services/course.service';
import { ProgramStudyService } from '../../../_services/program-study.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-course-detail',
  templateUrl: './admin-course-detail.component.html',
  styleUrls: ['./admin-course-detail.component.css']
})
export class AdminCourseDetailComponent implements OnInit {
  coursesList: Course[];
  programsList: ProgramStudy[];
  id: any;
  detailForm: FormGroup;

  constructor(private courseService: CourseService,
              private programService: ProgramStudyService,
              private fb: FormBuilder,
              private modalService: BsModalService,
              private router: Router,
              private route: ActivatedRoute,
              private customValidator: CustomValidationService,
              private location: Location) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.programService.getProgramStudies().subscribe(date => this.programsList = date);
    this.route.paramMap.subscribe(params => {
      const courseId = + params.get('id');
      if (courseId) {
        this.getCourse(courseId);
      }
    });
    this.createDetailForm();
  }
  createDetailForm() {
    this.detailForm = this.fb.group({
      couName: ['', Validators.required, this.customValidator.validateCourseName.bind(this.customValidator)],
      couCode: ['', Validators.required, this.customValidator.validateCourseCode.bind(this.customValidator)],
      couDescription: ['', Validators.required],
      couContent: ['', Validators.required],
      status: true,
      couPrice: ['', Validators.required],
      couPromotionPrice: ['', Validators.required],
      couViewCount: 0,
      proId: null,
      file: '',
      multipleFiles: '',
    });
  }
  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe(
      (course: Course) => this.editCourse(course),
      (err: any) => console.log(err)
    );
  }
  editCourse(courseList: Course) {
    this.detailForm.patchValue({
      couName : courseList.couName,
      couCode: courseList.couCode,
      couDescription: courseList.couDescription,
      couContent: courseList.couContent,
      status: courseList.status,
      couPrice: courseList.couPrice,
      couPromotionPrice: courseList.couPromotionPrice,
      couViewCount: courseList.couViewCount,
      proId: courseList.proId
    });
  }
  //
  goPreviousPage() {
    this.location.back();
  }
}
