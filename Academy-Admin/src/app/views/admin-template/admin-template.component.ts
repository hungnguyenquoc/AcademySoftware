import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../../_services/course.service';
import { Course } from '../../_models/course';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  uploadForm: FormGroup;
  courseList: Course[];
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  file: File;
  title: string = 'Angular File Upload';

  constructor(private http: HttpClient, private courseService: CourseService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createAddForm();
  }
  createAddForm() {
    this.uploadForm = this.fb.group({
      couName: 'abcd',
      couCode: 'abcde',
      status: true,
      couPrice: 0,
      couPromotionPrice: 0,
      couViewCount: 0,
      multipleFiles: '',
    });
  }
  uploadSubmit() {
    for (let i = 0; i < this.uploader.queue.length; i++) {
      const fileItem = this.uploader.queue[i]._file;
      if(fileItem.size > 10000000){
        alert('Each File should be less than 10 MB of size.');
        return;
      }
    }
    const formData = new FormData();
    // formData.append('file', this.uploadForm.get('file').value);
    // formData.append('multipleFiles', this.uploadForm.get('multipleFiles').value);
    formData.append('couName', this.uploadForm.get('couName').value);
    formData.append('status', this.uploadForm.get('status').value);
    formData.append('couPrice', this.uploadForm.get('couPrice').value);
    formData.append('couPromotionPrice', this.uploadForm.get('couPromotionPrice').value);
    formData.append('couViewCount', this.uploadForm.get('couViewCount').value);
    for (let j = 0; j < this.uploader.queue.length; j++) {
      const fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      formData.append('multipleFiles', fileItem);
      formData.append('fileSeq', 'seq' + j);
      formData.append( 'dataType', this.uploadForm.controls.type.value);
    }
    console.log(formData);

    this.courseService.addCourse(formData).subscribe( res => {
      console.log('success');
      console.log(this.courseList);
    }, err => {
      console.log(err);
    });
    this.uploader.clearQueue();
}
onFileSelect(event) {
  if (event.target.files.length > 0) {
    this.file = event.target.files[0];
    this.uploadForm.get('multipleFiles').setValue(this.file);
  }
}

}
