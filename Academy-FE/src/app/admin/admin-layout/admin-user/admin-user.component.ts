import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
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
