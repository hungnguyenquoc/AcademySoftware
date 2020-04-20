import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../../../_services/course.service';
import { ProgramStudyService } from '../../../_services/program-study.service';
import { ProgramStudy } from '../../../_models/programStudy';
import { Course } from '../../../_models/course';
import Swal from 'sweetalert2';
import { CustomValidationService } from '../../../_services/custom-validation.service';

@Component({
  selector: 'app-admin-course-add',
  templateUrl: './admin-course-add.component.html',
  styleUrls: ['./admin-course-add.component.css']
})
export class AdminCourseAddComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', { static: false}) itemCreateMdl: ElementRef;
  coursesList: Course[];
  programsList: ProgramStudy[];
  addForm: FormGroup;
  sub: any;
  file: File;
  previewUrl: any = null;
  constructor(public modalService: BsModalService,
              public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private courseService: CourseService,
              private programService: ProgramStudyService,
              private customValidator: CustomValidationService

              ) { }

  ngOnInit() {
    this.sub = this.programService.getProgramStudies().subscribe(data => this.programsList = data);
    this.createAddForm();
    this.showModal();
  }
  // hàm hiển thị modal cho khóa học
  showModal() {
    this.bsModalRef = this.modalService.show(this.itemCreateMdl, { class: 'modal-lg'});
    this.createAddForm();
  }
  // tạo form
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
  // Hàm thêm khóa học mới
  addCourse() {
    const formData = new FormData();
    formData.append('file', this.addForm.get('file').value);
    formData.append('multipleFiles', this.addForm.get('multipleFiles').value);
    formData.append('couName', this.addForm.get('couName').value);
    formData.append('couCode', this.addForm.get('couCode').value);
    formData.append('couDescription', this.addForm.get('couDescription').value);
    formData.append('couContent', this.addForm.get('couContent').value);

    formData.append('status', this.addForm.get('status').value);
    formData.append('couPrice', this.addForm.get('couPrice').value);
    formData.append('couPromotionPrice', this.addForm.get('couPromotionPrice').value);
    formData.append('couViewCount', this.addForm.get('couViewCount').value);
    formData.append('proId', this.addForm.get('proId').value);
    console.log(formData);
    this.courseService.addCourse(formData).subscribe( res => {
      this.bsModalRef.hide();
      this.itemCreated.emit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' Bạn đã thêm khóa học hành công',
        showConfirmButton: false,
        timer: 2000
      });
      console.log('success');
      console.log(this.coursesList);
    }, err => {
      console.log(err);
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.addForm.get('file').setValue(this.file);
      this.preview();
    }
  }
  preview() {
    // Show preview
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
}
