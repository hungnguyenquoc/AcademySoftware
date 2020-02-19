import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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
