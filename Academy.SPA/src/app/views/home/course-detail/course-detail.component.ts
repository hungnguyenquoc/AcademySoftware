import { Component, OnInit, Input, Output } from '@angular/core';
import { LandingFixService } from 'app/shared/services/landing-fix.service';
import { CourseService } from 'app/shared/course.service';
import { ClassStudyService } from 'app/shared/services/class-study.service';
import { Course } from 'app/shared/models/course';
import { ProgramStudy } from 'app/shared/models/programStudy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassStudy } from 'app/shared/models/classStudy';
import { ProgramStudyService } from 'app/shared/services/program-study.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  @Input() coursesList: Course;
  // coursesList: Course;
  classesList: ClassStudy[];
  id: any;
  detailForm: FormGroup;
  panelOpenState = false;
  courseId: any;
  courseData: any;
  constructor(
    private fix: LandingFixService,
    private courseService: CourseService,
    private programService: ProgramStudyService,
    private classesService: ClassStudyService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.fix.addFix();
    this.courseId = this.route.snapshot.params['id'];
    this.loadCourseDetail(this.courseId);
    // this.route.data.subscribe(data => {this.coursesList = data['coursesList' ];
    // });
    this.getCourse();
    // this.getProgram();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.fix.removeFix();
  }
  loadCourseDetail(courseId) {
    this.courseService.getCourse(courseId).subscribe(product => {
      this.courseData = product;
    });
  }
  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(data => this.coursesList = data);
  }
}
