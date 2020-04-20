import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Major } from '../../../_models/major';
import { MajorService } from '../../../_services/major.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-major-update',
  templateUrl: './admin-major-update.component.html',
  styleUrls: ['./admin-major-update.component.css']
})
export class AdminMajorUpdateComponent implements OnInit {
  @Input() major;
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemUpdateModal', {static: false}) itemUpdateModal: ElementRef;
  @ViewChild('editForm',  { static: true }) editForm: NgForm;
  // majorList: Major;
  majorsList: Major[];
  majorList: Major;
  constructor(private majorService: MajorService,
             private toastr: ToastrService,
             private route: ActivatedRoute,
             private modalService: BsModalService,
             public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.majorList = this.major;
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  showModalUpdate() {
    this.bsModalRef = this.modalService.show(this.itemUpdateModal, {class: 'modal-lg'});
  }
  updateMajor(id) {
    this.majorService.updateMajor(id, this.major).subscribe(next => {
      this.bsModalRef.hide();
      this.itemCreated.emit();
      this.toastr.success('Đã sửa thành công');
    }, error => {
      this.toastr.error(error);
    });
  }
}
