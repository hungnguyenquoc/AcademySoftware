import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService, BsLocaleService, DatepickerConfig, BsDatepickerConfig, defineLocale, viLocale } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import { Student } from '../../../_models/student';
import { ClassStudy } from '../../../_models/classStudy';
import { ClassStudyService } from '../../../_services/class-study.service';
import Swal from 'sweetalert2';
import { StudentService } from '../../../_services/student.service';

@Component({
  selector: 'app-admin-student-add',
  templateUrl: './admin-student-add.component.html',
  styleUrls: ['./admin-student-add.component.css']
})
export class AdminStudentAddComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;
  studentsList: Student[];
  classesList: ClassStudy[];
  addForm: FormGroup;
  modalRef: BsModalRef;
  GenderControl: any = ['Nam', 'Nữ'];
  file: File;
  previewUrl: any = null;
  bsConfig: Partial< DatepickerConfig>;
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private modalService: BsModalService,
              private fb: FormBuilder,
              private customValidator: CustomValidationService,
              private localeService: BsLocaleService,
              private classStudyService: ClassStudyService,
              private studentService: StudentService) {
                defineLocale('it', viLocale);
                this.localeService.use('it');
              } 
  ngOnInit() {
    this.classStudyService.getClasses().subscribe(data => this.classesList = data);
  }
  showModal() {
    this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
    this.createAddForm();
  }
  // tạo form
  createAddForm() {
    this.addForm = this.fb.group({
      stu_Code: ['', Validators.required],
      stu_Fullname: ['', Validators.required],
      stu_Gender: ['', Validators.required],
      dateOfBirth: '2020-06-04T21:49:51.5052387',
      stu_Phone: ['', Validators.required],
      stu_Email: ['', Validators.required],
      stu_Facebook: ['', Validators.required],
      // identity_Card: [null, Validators.required],
      source: ['', Validators.required],
      file: '',
      classId: null,
      status: 1,
    });
  }
  //
  addStudent() {
    const formData = new FormData();
    formData.append('file', this.addForm.get('file').value);
    formData.append('stu_Code', this.addForm.get('stu_Code').value);
    formData.append('stu_Fullname', this.addForm.get('stu_Fullname').value);
    formData.append('stu_Gender', this.addForm.get('stu_Gender').value);
    formData.append('dateOfBirth', this.addForm.get('dateOfBirth').value);
    formData.append('stu_Phone', this.addForm.get('stu_Phone').value);
    formData.append('stu_Email', this.addForm.get('stu_Email').value);
    formData.append('stu_Facebook', this.addForm.get('stu_Facebook').value);
    formData.append('source', this.addForm.get('source').value);
    formData.append('status', this.addForm.get('status').value);
    formData.append('classId', this.addForm.get('classId').value);
    console.log(formData);
    this.studentService.addStudent(formData).subscribe( res => {
      this.modalRef.hide();
      this.itemCreated.emit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' Bạn đã thêm thành công',
        showConfirmButton: false,
        timer: 2000
      });
      console.log('success');
      console.log(this.studentsList);
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
