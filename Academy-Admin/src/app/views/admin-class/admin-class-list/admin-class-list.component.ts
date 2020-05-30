import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClassStudyService } from '../../../_services/class-study.service';
import { CourseService } from '../../../_services/course.service';
import { Course } from '../../../_models/course';
import { ClassStudy } from '../../../_models/classStudy';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-class-list',
  templateUrl: './admin-class-list.component.html',
  styleUrls: ['./admin-class-list.component.css']
})
export class AdminClassListComponent implements OnInit {
  coursesList: Course[];
  classesList: ClassStudy[];
  modalRef: BsModalRef;
  
  constructor(private classStudyService: ClassStudyService, 
              private courseService: CourseService,
              private modalService: BsModalService,
              ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.classStudyService.getClasses().subscribe(data => this.classesList = data);
  }
  //
  refreshList() {
    this.classStudyService.getClasses().subscribe(data => {
      this.classesList = data;
    });
  }
  //
  itemCreated() {
    this.refreshList();
  }
  //
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  //
  openModalUpdate(templateUpdate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateUpdate);
  }
}
