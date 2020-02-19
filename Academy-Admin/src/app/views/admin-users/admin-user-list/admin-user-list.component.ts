import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  usersList: User;
  constructor(private serviceUser: UserService) { }

  ngOnInit() {
    this.serviceUser.getAll().subscribe(data => this.usersList = data);
    // console.log(this.usersList);
  }

}
