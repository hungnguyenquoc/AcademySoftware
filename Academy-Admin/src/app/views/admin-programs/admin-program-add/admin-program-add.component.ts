import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { ProgramStudy } from '../../../_models/programStudy';
import { Major } from '../../../_models/major';
import { ProgramStudyService } from '../../../_services/program-study.service';
import { ToastrService } from 'ngx-toastr';
import { MajorService } from '../../../_services/major.service';

@Component({
  selector: 'app-admin-program-add',
  templateUrl: './admin-program-add.component.html',
  styleUrls: ['./admin-program-add.component.css']
})
export class AdminProgramAddComponent implements OnInit {
  majorsList: Major[];
  programsList: ProgramStudy[];
  constructor(public programService: ProgramStudyService, private toastr: ToastrService,
            private majorService: MajorService) { }

  ngOnInit() {
    this.resetForm();
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.programService.formData = {
      id: null,
      pro_Name: '',
      pro_Code: '',
      pro_Description: '',
      status: true,
      majorId: null,
    };
  }
  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
      this.toastr.success('thêm thành công', 'Payment Detail Register');
    }
  }
  insertRecord(form: NgForm) {
    // this.majorList = Object.assign({}, this.createForm.value);
    // this.programService.programsList = Object.assign({});
    this.programService.addProgramStudy(form.value).
    subscribe(res => {
      this.resetForm(form);
      this.programService.refreshList();
    });
  }
  checkProName(code: string): boolean {
    if (this.programService.programsList === null) { return true; }
    if (code === '' || code === null) { return true; }
    for (const pro of this.programService.programsList) {
      if (pro.pro_Name.toLowerCase() === code.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  checkCode(code: string): boolean {
    if (this.programService.programsList === null) {return true; }
    if (code === '' || code === null) {return true; }
    for ( const proCode of this.programService.programsList) {
      if (proCode.pro_Code.toLowerCase() === code.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  // updateRecord(form: NgForm) {
  //   console.log(this.service.formData);
  //   this.service.putProgram(form.value).subscribe(res => {
  //     this.resetForm(form);
  //     this.service.refreshList();
  //   });
  // }
}
