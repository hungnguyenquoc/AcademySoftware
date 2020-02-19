import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatepickerConfig } from 'ngx-bootstrap';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';

@ Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  GenderControl: any = ['Nam', 'Nữ'];
  bsConfig: Partial< DatepickerConfig>;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.createRegisterForm();
    this.userService.getAll().subscribe(data => this.user = data);
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      lastname: ['', Validators.required],
      fullname: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      // cityName: ['', [Validators.required]],
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
