import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../../_services/course.service';
import { Course } from '../../_models/course';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ClassStudyService } from '../../_services/class-study.service';
import { ClassStudy } from '../../_models/classStudy';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  addForm: FormGroup;
  coursesList: Course[];
  classesList: ClassStudy[];
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  file: File;
  title: string = 'Angular File Upload';
  studyTimeCheckbox: Array<any> = [
    { name: 'Thứ 2', value: 't2'},
    { name: 'Thứ 3', value: 't3'},
    { name: 'Thứ 4', value: 't4'},
  ];
  disabled = false;
  ShowFilter = true;
  showAll = true;
  limitSelection = false;
  disableBangalore = true;
  cities: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(private http: HttpClient, private classStudyService:
     ClassStudyService, private fb: FormBuilder, private courseService: CourseService) { }

  ngOnInit() {
    this.createAddForm();
    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.cities = [
      { item_id: 1, item_text: 'New Delhi' },
      { item_id: 2, item_text: 'Mumbai' },
      { item_id: 3, item_text: 'Bangalore' },
      { item_id: 4, item_text: 'Pune' },
      { item_id: 5, item_text: 'Chennai' },
      { item_id: 6, item_text: 'Navsari' }
  ];
    this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter
    };
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log('form model', this.addForm.get('city').value);
  }
  onItemDeSelect(item: any) {
    console.log('onItem DeSelect', item);
    console.log('form model', this.addForm.get('city').value);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  onDropDownClose() {
    console.log('dropdown closed');
  }
  toogleShowAll() {
    this.showAll = !this.showAll;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      enableCheckAll: this.showAll
    });
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: -1
      });
    }
  }

  handleDisableBangalore() {
    this.cities[2].isDisabled = this.disableBangalore;
    this.cities = [...this.cities];
  }

  handleReset() {
    this.addForm.get('studyTime').setValue([]);
  }
  createAddForm() {
    this.addForm = this.fb.group({
      class_Code: '',
      class_Description: '',
      class_Address: '',
      courseId: null,
      studyTime:  [this.selectedItems]
    });
  }
  uploadSubmit() {
    if (this.addForm.valid) {
      this.classesList = Object.assign({}, this.addForm.value);
      this.classStudyService.addClass(this.classesList).subscribe( res => {
        console.log('success');
        console.log(this.classesList);
      }, err => {
        console.log(err);
      });
    }
}
onCheckboxChange(e) {
  const studyTime: FormArray = this.addForm.get('studyTime') as FormArray;
  if (e.target.checked) {
    studyTime.push(new FormControl(e.target.value));
  } else {
    let i = 0;
    studyTime.controls.forEach((item: FormControl) => {
      if (item.value === e.target.value) {
        studyTime.removeAt(i);
        return;
      }
      i++;
    });
  }
}


}
