import { Component, OnInit } from '@angular/core';
import { ClassStudyService } from '../../../_services/class-study.service';

@Component({
  selector: 'app-admin-class-list',
  templateUrl: './admin-class-list.component.html',
  styleUrls: ['./admin-class-list.component.css']
})
export class AdminClassListComponent implements OnInit {

  constructor(private classStudyService: ClassStudyService) { }

  ngOnInit() {
  }

}
