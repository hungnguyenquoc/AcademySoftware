import { Component, OnInit } from '@angular/core';
import { ProgramStudy } from '../../_models/programStudy';
import { ProgramStudyService } from '../../_services/program-study.service';
import { MajorService } from '../../_services/major.service';
import { Major } from '../../_models/major';

@Component({
  selector: 'app-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.css']
})
export class AdminProgramsComponent implements OnInit {
  programsList: ProgramStudy[];
  majorsList: Major[];
  constructor(private programService: ProgramStudyService, private majorService: MajorService) { }

  ngOnInit() {
    this.programService.getProgramStudies().subscribe(data => this.programsList = data);
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  
}
