import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { MajorService } from '../../../_services/major.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Major } from '../../../_models/major';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CustomValidationService } from '../../../_services/custom-validation.service';

declare var $: any;
@Component({
  selector: 'app-admin-major-add',
  templateUrl: './admin-major-add.component.html',
  styleUrls: ['./admin-major-add.component.css']
})
export class AdminMajorAddComponent implements OnInit {
  createForm: FormGroup;
  majorList: Major;
  majorsList: Major[];
  modalRef: BsModalRef;

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private majorService: MajorService,
             private toastr: ToastrService,
             private fb: FormBuilder, private router: Router,
             private customValidator: CustomValidationService
             ) { }

  ngOnInit() {
    // this.createAddForm();
    // this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  // createAddForm() {
  //   this.createForm = this.fb.group({
  //     maj_Name: ['', Validators.required, this.customValidator.validateMajorName.bind(this.customValidator)],
  //     maj_Code: ['', Validators.required, this.customValidator.validateMajorCode.bind(this.customValidator)],
  //     maj_Description: ['', Validators.required],
  //     status: 1
  //   });
  // }
  // load major
  // refreshList() {
  //   this.majorService.getMajors().subscribe(data => this.majorsList = data);
  // }
  // // function add major
  // addMajor() {
  //   if (this.createForm.valid) {
  //     this.majorList = Object.assign({}, this.createForm.value);
  //     this.majorService.addMajor(this.majorList).subscribe(() => {
  //       // this.redirectTo('admin-major-add');
  //       this.toastr.success(' Thêm thành công');
  //       $('#create').modal('hide');
  //       this.refreshList();
  //     }, error => {
  //       this.toastr.success( ' Chương trình học đã tồn tại');
  //     });
  //   }
  // }
}
