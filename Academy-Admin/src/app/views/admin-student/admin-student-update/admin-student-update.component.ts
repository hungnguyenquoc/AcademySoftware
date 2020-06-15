import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassStudy } from '../../../_models/classStudy';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../_services/student.service';
import { ClassStudyService } from '../../../_services/class-study.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-student-update',
  templateUrl: './admin-student-update.component.html',
  styleUrls: ['./admin-student-update.component.css']
})
export class AdminStudentUpdateComponent implements OnInit {
  @Input() student;
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemUpdateMdl', { static: false }) itemUpdateMdl: ElementRef;
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  classesList: ClassStudy[];
  modalRef: BsModalRef;
  file: File;
  previewUrl: any;
  GenderControl: any = ['Nam', 'Nữ'];

  constructor(public modalService: BsModalService, private route: ActivatedRoute,
              private router: Router, private studentService: StudentService,
              private classStudyService: ClassStudyService) { }

  ngOnInit() {
    this.classStudyService.getClasses().subscribe(data => this.classesList = data);
  }
  showModal() {
    this.modalRef = this.modalService.show(this.itemUpdateMdl, {
      class: 'modal-lg',
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.student.file = this.file;
      // this.AddForm.get('file').setValue(this.file);
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

  updateStudent(ID) {
    const formData = new FormData();
    formData.append('file', this.student.file);
    formData.append('stu_Code', this.student.stu_Code);
    formData.append('stu_Fullname', this.student.stu_Fullname);
    formData.append('stu_Gender', this.student.stu_Gender);
    formData.append('stu_Phone', this.student.stu_Phone);
    formData.append('stu_Email', this.student.stu_Email);
    formData.append('status', this.student.status);
    formData.append('stu_Facebook', this.student.stu_Facebook);
    formData.append('source', this.student.source);
    formData.append('couViewCount', this.student.couViewCount);
    formData.append('classId', this.student.classId);
    this.studentService.updateStudent(ID, formData).subscribe(
      next => {
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
      },
      (error) => {}
    );
  }
}
