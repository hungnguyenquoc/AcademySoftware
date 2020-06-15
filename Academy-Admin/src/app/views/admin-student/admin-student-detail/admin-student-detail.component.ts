import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Student } from '../../../_models/student';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../_services/student.service';
import { ClassStudy } from '../../../_models/classStudy';
import { ClassStudyService } from '../../../_services/class-study.service';

@Component({
  selector: 'app-admin-student-detail',
  templateUrl: './admin-student-detail.component.html',
  styleUrls: ['./admin-student-detail.component.css']
})
export class AdminStudentDetailComponent implements OnInit {
  @Input() student;
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemUpdateMdl', { static: false }) itemUpdateMdl: ElementRef;
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  classesList: ClassStudy[];
  modalRef: BsModalRef;
  file: File;
  previewUrl: any;
  constructor(public modalService: BsModalService, private route: ActivatedRoute,
              private router: Router, private studentService: StudentService,
              private classStudyService: ClassStudyService ) { }

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
}
