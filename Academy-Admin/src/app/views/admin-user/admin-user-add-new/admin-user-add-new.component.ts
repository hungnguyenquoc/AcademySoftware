import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatepickerConfig, BsModalRef, BsDatepickerConfig, BsModalService, BsLocaleService, defineLocale, viLocale } from 'ngx-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Router } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';
import { UserService } from '../../../_services/user.service';
import { RoleService } from '../../../_services/role.service';
import { Role } from '../../../_models/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-user-add-new',
  templateUrl: './admin-user-add-new.component.html',
  styleUrls: ['./admin-user-add-new.component.css']
})
export class AdminUserAddNewComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  GenderControl: any = ['Nam', 'Nữ'];
  // StatusControl: any = [1];
  bsConfig: Partial< DatepickerConfig>;
  // @Output() itemCreated = new EventEmitter<any>();
  // @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;
  // modalRef: BsModalRef;
  roles: string[] = [];
  allRoles: IMultiSelectOption [] = [];
  // roles: any[];


  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;
  modalRef: BsModalRef;

  // optionsModel: string[] = [];
  // myOptions: IMultiSelectOption[];
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: BsModalService,
    private userService: UserService,
    private roleService: RoleService,
    private localeService: BsLocaleService
    ) {
      defineLocale('it', viLocale);
      this.localeService.use('it');
    }

  ngOnInit() {
  this.createRegisterForm();
  this.userService.getAll().subscribe(data => this.user = data);
  // this.loadRoles();
  }
  showModal() {
    this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
    this.createRegisterForm();
    this.loadRoles();
  }
  // hàm load role;
  loadRoles() {
    this.roleService.getAll().subscribe((response: Role[]) => {
      this.allRoles = [];
      for ( const role of response) {
        this.allRoles.push({id: role.name, name: role.name});
      }
    });
  }
  // // hàm show modal
  // showModal() {
  //   this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
  //   this.createRegisterForm();
  // }
  //   onChange() {
  //     console.log(this.optionsModel);
  // }
  // // tạo form đăng ký
  createRegisterForm() {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      roles: [null, this.allRoles],
      status: 1,
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }
  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.modalRef.hide();
        this.itemCreated.emit();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: ' Bạn đã tạo tài khoản thành công',
          showConfirmButton: false,
          timer: 2000
        });
        console.log('success');
        }, error => {
        console.log('fail');
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/admin-users']);
        });
      });
    }
  }
}
