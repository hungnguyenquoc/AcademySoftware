import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';
import { RoleService } from '../../../_services/role.service';
import { Role } from '../../../_models/role';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  usersList: User;
  roleList: Role;
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  constructor(private serviceUser: UserService, private role: RoleService) { }

  ngOnInit() {
    this.serviceUser.getAll().subscribe(data => this.usersList = data);
    this.role.getAll().subscribe(date => this.roleList = date);
    // console.log(this.usersList);
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

}
