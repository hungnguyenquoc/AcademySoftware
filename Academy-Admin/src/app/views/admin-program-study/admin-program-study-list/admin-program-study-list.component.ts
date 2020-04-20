import { Component, OnInit } from '@angular/core';
import { ProgramStudyService } from '../../../_services/program-study.service';
import { ProgramStudy } from '../../../_models/programStudy';
import { Major } from '../../../_models/major';
import { MajorService } from '../../../_services/major.service';

@Component({
  selector: 'app-admin-program-study-list',
  templateUrl: './admin-program-study-list.component.html',
  styleUrls: ['./admin-program-study-list.component.css']
})
export class AdminProgramStudyListComponent implements OnInit {
  programsList: ProgramStudy[];
  majorsList: Major[];
  constructor(private programService: ProgramStudyService, private majorService: MajorService) { }

  ngOnInit() {
    this.programService.getProgramStudies().subscribe(data => this.programsList = data);
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
    this.refreshList();
  }
  // load major
  refreshList() {
    this.programService.getProgramStudies().subscribe(data => this.programsList = data);
  }
}
