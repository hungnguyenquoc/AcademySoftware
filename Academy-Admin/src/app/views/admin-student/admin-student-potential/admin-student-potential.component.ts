import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { StudentService } from '../../../_services/student.service';
import { Student } from '../../../_models/student';
import { ClassStudy } from '../../../_models/classStudy';
import { ClassStudyService } from '../../../_services/class-study.service';

@Component({
  selector: 'app-admin-student-potential',
  templateUrl: './admin-student-potential.component.html',
  styleUrls: ['./admin-student-potential.component.css']
})
export class AdminStudentPotentialComponent implements OnInit {
  modalRef: BsModalRef;
  studentsList: Student[];
  studentsListOfficial: Student[];
  classesList: ClassStudy[];
  searchValue = '';
  visible = false;
  constructor(private modalService: BsModalService,
              private studentService: StudentService, private classStudyService: ClassStudyService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.studentsList = data);
    this.classStudyService.getClasses().subscribe(date => this.classesList = date);

  }
  itemCreated() {
    this.refreshList();
  }
  //
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  refreshList() {
    this.studentService.getStudents().subscribe(data => {
      this.studentsList = data;
    });
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.studentsList = this.studentsList.filter((item: Student) => item.stu_Fullname.indexOf(this.searchValue) !== -1);
  }
}
