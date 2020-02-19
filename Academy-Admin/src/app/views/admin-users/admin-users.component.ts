import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  usersList: User;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    // this.userService.getAll().subscribe(data => this.usersList = data);
  }

}
