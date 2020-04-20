import { Component, OnInit, TemplateRef, Input  } from '@angular/core';
import { Major } from '../../_models/major';
import { ApiService } from '../../_services/api.service';
import { MajorService } from '../../_services/major.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidationService } from '../../_services/custom-validation.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-admin-major',
  templateUrl: './admin-major.component.html',
  styleUrls: ['./admin-major.component.css']
})
export class AdminMajorComponent implements OnInit {
  // majorsList: Major[];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  createForm: FormGroup;
  updateForm: FormGroup;
  majorList: Major;
  majorsList: Major[];
  // @Input() item: Major;

  constructor(private majorService: MajorService, 
              private modalService: BsModalService,  
              private fb: FormBuilder, 
              private router: Router,
              private route: ActivatedRoute,
              private customValidator: CustomValidationService
            ) { }


  ngOnInit() {
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
    this.route.paramMap.subscribe(params => {
      const majorId = + params.get('id');
      if (majorId) {
        this.getMajor(majorId);
      }
    });
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 5,
      orderCellsTop: true,
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Vietnamese.json'
      }
    };
    this.createAddForm();
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  getMajor(id: number) {
    this.majorService.getMajor(id).subscribe(
      (major: Major) => this.editMajor(major),
      (err: any) => console.log(err)
    );
  }
  editMajor(majorList: Major) {
    this.createForm.patchValue({
    });
  }
  //
  createAddForm() {
    this.createForm = this.fb.group({
      maj_Name: ['', Validators.required, this.customValidator.validateMajorName.bind(this.customValidator)],
      maj_Code: ['', Validators.required, this.customValidator.validateMajorCode.bind(this.customValidator)],
      maj_Description: ['', Validators.required],
      status: 1
    });
  }
  //
  itemCreated() {
    this.refreshList();
  }
  //
  deleteMajor(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.majorService.deleteMajor(id).subscribe(() => {
          Swal.fire(
            'Đã xóa!',
            'Your file has been deleted.',
            'success'
          );
          this.refreshList();
        }, err => {
          console.log(err);
        });
      }
    });
  }
  //
  refreshList() {
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  // function add major
  addMajor() {
    if (this.createForm.valid) {
      this.majorList = Object.assign({}, this.createForm.value);
      this.majorService.addMajor(this.majorList).subscribe(() => {
        // this.redirectTo('admin-major-add');
       // this.toastr.success(' Thêm thành công');
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' Bạn đã thêm ngành học ' + this.majorList.maj_Name  + ' thành công',
        showConfirmButton: false,
        timer: 2000
      });
        $('#create').modal('hide');
        this.refreshList();
      }, error => {
        console.log(error);
      });
    }
  }
}
