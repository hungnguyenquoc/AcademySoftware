import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../_models/user';
import { HttpClient } from '@angular/common/http';
import { ToastrService} from 'ngx-toastr';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.toastr.error(error);
    });
  }

}
