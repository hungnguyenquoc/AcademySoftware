import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, BsLocaleService, defineLocale, BsDatepickerConfig } from 'ngx-bootstrap';
import { viLocale } from 'ngx-bootstrap/locale';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ClassStudyService } from '../../../_services/class-study.service';
import { CourseService } from '../../../_services/course.service';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import { Course } from '../../../_models/course';
import { ClassStudy } from '../../../_models/classStudy';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-class-add',
  templateUrl: './admin-class-add.component.html',
  styleUrls: ['./admin-class-add.component.css']
})
export class AdminClassAddComponent implements OnInit {

  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;
  modalRef: BsModalRef;
  coursesList: Course[];
  classesList: ClassStudy[];
  addForm: FormGroup;

  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: Array<any> = [
    { item_id: 1, item_text: 'New Delhi' },
    { item_id: 2, item_text: 'Mumbai' },
  ];
  selectedItems: Array<any> = [];
  dropdownSettings: any = {};

  // studyTime = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  
  // studyTimeCheckbox: Array<String> = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  studyTimeCheckbox: Array<any> = [
    { name: 'Thứ 2', value: 't2'},
    { name: 'Thứ 3', value: 't3'},
    { name: 'Thứ 4', value: 't4'},
  ];
  // ];

  // selectedStudyTimeValues = [];
  // studyTimeError: Boolean = true;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private modalService: BsModalService,
              private fb: FormBuilder, private classStudyService: ClassStudyService,
              private courseService: CourseService, 
              private customValidator: CustomValidationService,
              private localeService: BsLocaleService
    ) {
      defineLocale('it', viLocale);
      this.localeService.use('it');
    }

  ngOnInit() {

    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.createAddForm();

  }
  //
  showModal() {
    this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
    this.createAddForm();
  }
  insertForm(optionId) {
    console.log(this.classesList);
    if (this.addForm.valid) {
      this.classesList = Object.assign({}, this.addForm.value);
      this.classStudyService.createClass(optionId, this.classesList).subscribe( res => {
        console.log('success');
        console.log(this.classesList);
      }, err => {
        console.log(err);
      });
    }
  }
  // tạo form
  createAddForm() {
    this.addForm = this.fb.group({
      class_Code: ['', Validators.required],
      class_Description: ['', Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      class_Address: ['', Validators.required],
      // studyTimeGetDay:  this.fb.array([]),
      courseId: null,
      status: 1,
      optionId: 1,
    });
  }
  //
  onCheckboxChange(e) {
    const studyTime: FormArray = this.addForm.get('studyTimeGetDay') as FormArray;
    if (e.target.checked) {
      studyTime.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      studyTime.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          studyTime.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  refreshList() {
    this.classStudyService.getClasses().subscribe(data => this.classesList = data);
  }
  //
  // addStudyTimeControls() {
  //   const arr = this.studyTimeCheckbox.map(element => {
  //     return this.fb.control(false);
  //   });
  //   return this.fb.array(arr);
  // }
  //
  get studyTimeArray() {
    return <FormArray>this.addForm.get('studyTime');
  }
  //
  checkStudyTimeControlTouched() {
    let studyTime = false;
    this.studyTimeArray.controls.forEach(control => {
      if (control.touched) {
        studyTime = true;
      }
    });
    return studyTime;
  }
  //
  // getSelectedStudyTimeValues() {
  //   this.selectedStudyTimeValues = [];
  //   this.studyTimeArray.controls.forEach((control, i) => {
  //     if (control.value) {
  //       this.selectedStudyTimeValues.push(this.studyTimeCheckbox[i]);
  //     }
  //   });
  //   this.studyTimeError = this.selectedStudyTimeValues.length > 0 ? false : true;
  // }


 
}
