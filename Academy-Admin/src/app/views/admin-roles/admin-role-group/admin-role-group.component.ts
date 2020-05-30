import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../_services/role.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../../../_services/custom-validation.service';
import { Role } from '../../../_models/role';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-role-group',
  templateUrl: './admin-role-group.component.html',
  styleUrls: ['./admin-role-group.component.css']
})
export class AdminRoleGroupComponent implements OnInit {
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  rolesList: Role[];
  SelectedIDs: any[] = [];
  addForm: FormGroup;
  constructor(private roleService: RoleService,
              private modalService: BsModalService,
              private bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private customValidator: CustomValidationService,
              ) { }

  ngOnInit() {
    this.roleService.getAll().subscribe(data => this.rolesList = data);
    this.createAddForm();
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
  createAddForm() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  //
  addRole() {
    if (this.addForm.valid) {
      this.rolesList = Object.assign({}, this.addForm.value);
      this.roleService.addRole(this.rolesList).subscribe(() => {
        // this.redirectTo('admin-major-add');
       // this.toastr.success(' Thêm thành công');
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' Bạn đã thêm thành công',
        showConfirmButton: false,
        timer: 2000
      });
      this.refreshList();
      }, error => {
        console.log(error);
      });
    }
  }
  //
  deleteRole(id: number) {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa?',
      text: 'Bạn sẽ không thể khôi phục lại dữ liệu !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.roleService.deleteRole(id).subscribe(() => {
          Swal.fire(
            'Đã xóa!',
            'Dữ liệu đã được xóa',
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
    this.roleService.getAll()
    .subscribe(data => {
      this.rolesList = data;
      this.dtTrigger.next();
    });
  }
  //
  deleteSelected() {
    console.log(this.SelectedIDs);
    this.SelectedIDs.forEach(function (value) {
    this.deleteCourseCate1(value);
    });
  }
  selectID(id, event: any) {
    console.log(id);
    this.SelectedIDs.push(id);
  }
  //
  deleteCourseCate1(id: number) {
    this.roleService.deleteRole(id).subscribe(() => {
      console.log('success');
      }, error => {
        console.log(error);
    });
  }
}
