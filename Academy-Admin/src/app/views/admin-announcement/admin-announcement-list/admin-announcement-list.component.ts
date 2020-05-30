import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ClassStudyService } from '../../../_services/class-study.service';
import { ClassStudy } from '../../../_models/classStudy';

@Component({
  selector: 'app-admin-announcement-list',
  templateUrl: './admin-announcement-list.component.html',
  styleUrls: ['./admin-announcement-list.component.css']
})
export class AdminAnnouncementListComponent implements OnInit {
  modalRef: BsModalRef;
  classesList: ClassStudy[];

  constructor(private modalService: BsModalService,
              private classStudyService: ClassStudyService,
              ) { }

  ngOnInit() {
  }
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
