import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatepickerConfig, BsModalRef, BsModalService, BsDatepickerConfig, BsLocaleService, viLocale, defineLocale } from 'ngx-bootstrap';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { RoleService } from '../../../_services/role.service';
import { Role } from '../../../_models/role';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  GenderControl: any = ['Nam', 'Nữ'];
  StatusControl: any = [1];
  bsConfig: Partial< DatepickerConfig>;
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemCreateMdl', {static: false }) itemCreateMdl: ElementRef;
  modalRef: BsModalRef;
  roles: string[] = [];
  allRoles: IMultiSelectOption [] = [];
  // roles: any[];

  optionsModel: string[] = [];
  myOptions: IMultiSelectOption[];
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
  // hàm show modal
  showModal() {
    this.modalRef = this.modalService.show(this.itemCreateMdl,  { class: 'modal-lg'});
    this.createRegisterForm();
  }
    onChange() {
      console.log(this.optionsModel);
  }
  // tạo form đăng ký
  createRegisterForm() {
    this.registerForm = this.fb.group({
      lastname: ['', Validators.required],
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
