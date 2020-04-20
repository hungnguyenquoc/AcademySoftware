import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProgramStudy } from '../../../_models/programStudy';
import { NgForm } from '@angular/forms';
import { ProgramStudyService } from '../../../_services/program-study.service';

@Component({
  selector: 'app-admin-program-update',
  templateUrl: './admin-program-update.component.html',
  styleUrls: ['./admin-program-update.component.css']
})
export class AdminProgramUpdateComponent implements OnInit {
  @Input() item: ProgramStudy;
  @ViewChild('editForm',  { static: true }) editForm: NgForm;

  constructor(private programService: ProgramStudyService) { }

  ngOnInit() {
  }
  getProgramStudy(id) {
    this.programService.getProgramStudy(id).subscribe(data => this.item = data);
  }
  // getMajor(id) {
  //   this.majorService.getMajor(id).subscribe(data => this.item = data);
  // }
  // updateMajor(id) {
  //   this.majorService.updateMajor(id, this.item).subscribe(next => {
  //     this.toastr.success('Đã sửa thành công');
  //     this.editForm.reset(this.item);
  //   }, error => {
  //     this.toastr.error(error);
  //   });
  // }
}
