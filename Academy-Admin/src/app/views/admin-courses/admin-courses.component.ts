import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { CourseCategory } from '../../_models/courseCategory';
import { CourseCategoryService } from '../../_services/course-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { MajorService } from '../../_services/major.service';
import { Major } from '../../_models/major';
import { ProgramStudy } from '../../_models/programStudy';
import { ProgramStudyValidator } from '../../_directives/program-study.directive';
import { Course } from '../../_models/course';
import { CourseService } from '../../_services/course.service';
import { ProgramStudyService } from '../../_services/program-study.service';
import { FileUploader } from 'ng2-file-upload';
import { CustomValidationService } from '../../_services/custom-validation.service';


@ Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  // @Output() itemCreated = new EventEmitter<any>();
  bsModalRef: BsModalRef;
  coursesList: Course[];
  programsList: ProgramStudy[];
  addForm: FormGroup;
  file: File;
  previewUrl: any = null;
  sub: any;
  public totalfiles: Array<File> = [];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  constructor(private courseService: CourseService,
              private programService: ProgramStudyService,
              private fb: FormBuilder, 
              private modalService: BsModalService,
              private router: Router,
              private route: ActivatedRoute,
              private customValidator: CustomValidationService
              ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.programService.getProgramStudies().subscribe(date => this.programsList = date);
    this.route.paramMap.subscribe(params => {
      const courseId = + params.get('id');
      if (courseId) {
        this.getCourse(courseId);
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 15,
      orderCellsTop: true,
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Vietnamese.json'
      }
    };

    this.createAddForm();
  }
  createAddForm() {
    this.addForm = this.fb.group({
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
    this.addForm.patchValue({
      couName : courseList.couName,
    });
  }
  refreshList() {
    this.courseService.getCourses().subscribe(data => {
      this.coursesList = data;
    });
  }
  itemCreated() {
    this.refreshList();
  }
  transform(items: any[], value: string): string {
    return items.slice(1) + '' + items.slice(0, 1);
  }
  //
  viewDetailData(id: number) {
    this.router.navigate(['/admin-courses/admin-course-detail', id]);
  }
  updateCourse(id: number) {
    this.router.navigate(['/admin-courses/admin-course-update', id]);
  }
}

