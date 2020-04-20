import { Component, OnInit } from '@angular/core';
import { ProgramStudyService } from '../../_services/program-study.service';
import { MajorService } from '../../_services/major.service';
import { Major } from '../../_models/major';

@Component({
  selector: 'app-admin-program-study',
  templateUrl: './admin-program-study.component.html',
  styleUrls: ['./admin-program-study.component.css']
})
export class AdminProgramStudyComponent implements OnInit {
  majorsList: Major[];
  constructor(private programService: ProgramStudyService, private majorService: MajorService) { }

  ngOnInit() {
  }
  // load major
  refreshList() {
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
}
