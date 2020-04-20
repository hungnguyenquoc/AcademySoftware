import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProgramStudyService } from '../../../_services/program-study.service';
import { ToastrService } from 'ngx-toastr';
import { ProgramStudy } from '../../../_models/programStudy';
import { Major } from '../../../_models/major';
import { MajorService } from '../../../_services/major.service';
import { ProgramStudyValidator, ProgramStudyDirective } from '../../../_directives/program-study.directive';
import { ProgramDirective } from '../../../_directives/program.directive';
declare var $: any;

@Component({
  selector: 'app-admin-program-study-add',
  templateUrl: './admin-program-study-add.component.html',
  styleUrls: ['./admin-program-study-add.component.css']
})
export class AdminProgramStudyAddComponent implements OnInit {
  createForm: FormGroup;
  programList: ProgramStudy;
  programsList: ProgramStudy[];
  majorsList: Major [];
  constructor(private programService: ProgramStudyService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private majorService: MajorService,
              private programValidators: ProgramStudyValidator
  ) {}
  ngOnInit() {
    this.createAddForm();
    this.majorService.getMajors().subscribe(data => this.majorsList = data);
  }
  createAddForm() {
    this.createForm = this.fb.group({
      pro_Name: ['', Validators.required],
      pro_Code: ['', Validators.required],
      pro_Description: ['', Validators.required],
      majorId: ['', Validators.required],
      status: 1,
    });
  }
  //
  checkProName(code: string): boolean {
    if (this.programsList === null) { return true; }
    if (code === '' || code === null) { return true; }
    for (const pro of this.programsList) {
      if (pro.pro_Name.toLowerCase() === code.toLowerCase()) {
        return this.createForm.get('pro_Name').hasError('Tồn tại');
      }
    }
    return true;
  }
  //
  insertForm() {
    if (this.createForm.valid) {
      // this.programList = Object.assign({}, this.createForm.value);
      this.programService.addProgramStudy(this.createForm.value).subscribe(() => {
        this.toastr.success('Thêm thành công');
        $('#create').modal('hide');
        this.refreshList();
      });
    }
  }
  //
  refreshList() {
    this.programService.getProgramStudies().subscribe(data => this.programsList = data);
  }
  //
}
