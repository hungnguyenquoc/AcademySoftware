import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  list: User[];
  constructor(public fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    // this.userService.getAll().subscribe(next => {
    //   console.log('abc');
    // });
    // console.log(this.list);
  }

}
