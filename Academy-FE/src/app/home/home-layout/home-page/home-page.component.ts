import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
  }

}
