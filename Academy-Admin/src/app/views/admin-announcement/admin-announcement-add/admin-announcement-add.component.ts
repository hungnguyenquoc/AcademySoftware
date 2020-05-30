import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-announcement-add',
  templateUrl: './admin-announcement-add.component.html',
  styleUrls: ['./admin-announcement-add.component.css']
})
export class AdminAnnouncementAddComponent implements OnInit {

  
  modalRef: BsModalRef;@Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  showModal() {
    this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
  }
}
