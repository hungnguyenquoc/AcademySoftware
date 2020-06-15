import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService, TabsetComponent } from 'ngx-bootstrap';
import { StudentService } from '../../../_services/student.service';
import { ClassStudyService } from '../../../_services/class-study.service';
import { Student } from '../../../_models/student';
import { ClassStudy } from '../../../_models/classStudy';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-student-list',
  templateUrl: './admin-student-list.component.html',
  styleUrls: ['./admin-student-list.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AdminStudentListComponent implements OnInit {
  modalRef: BsModalRef;
  studentsList: Student[];
  studentsListOfficial: Student[];
  classesList: ClassStudy[];
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};

  dtTrigger: Subject<any> = new Subject();
  // dtTrigger: Subject<any> = new Subject();
  constructor(private modalService: BsModalService,
              private studentService: StudentService,
              private classStudyService: ClassStudyService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.studentsList = data);
    this.studentService.getStudentsOfficial().subscribe(dat => this.studentsListOfficial = dat);
    this.classStudyService.getClasses().subscribe(date => this.classesList = date);
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 5,
      orderCellsTop: true,
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Vietnamese.json'
      }
    };
  }
  //
  
  //
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  //
  refreshList() {
    this.studentService.getStudents().subscribe(data => {
      this.studentsList = data;
    });
  }
  //
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  //
  itemCreated() {
    this.refreshList();
  }
  //
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  // ant design
}
