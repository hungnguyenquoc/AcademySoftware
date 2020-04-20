import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProgramStudy } from '../../../_models/programStudy';
import { NgForm } from '@angular/forms';
import { ProgramStudyService } from '../../../_services/program-study.service';

@Component({
  selector: 'app-admin-program-study-update',
  templateUrl: './admin-program-study-update.component.html',
  styleUrls: ['./admin-program-study-update.component.css']
})
export class AdminProgramStudyUpdateComponent implements OnInit {
  @Input() item: ProgramStudy;
  @ViewChild('editForm',  { static: true }) editForm: NgForm;
  // majorList: Major;
  programsList: ProgramStudy[];
  constructor(private programService: ProgramStudyService) { }

  ngOnInit() {
  }
  getProgramStudy(id) {
    this.programService.getProgramStudy(id).subscribe(data => this.item = data);
  }
}
