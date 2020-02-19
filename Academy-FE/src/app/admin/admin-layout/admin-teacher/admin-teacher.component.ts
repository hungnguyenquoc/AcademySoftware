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
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
