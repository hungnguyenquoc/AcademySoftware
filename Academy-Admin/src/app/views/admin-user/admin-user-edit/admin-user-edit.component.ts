import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';
import { AuthService } from '../../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  @Input() userList; 
  @HostListener('window:beforeunload', ['$event'])
  userId: any;
  file: File;
  previewUrl: any;
  constructor(private route: ActivatedRoute, private userService: UserService,
              private authService: AuthService) { }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    // this.userId = this.route.snapshot.params['id'];
    // this.loadCourseDetail(this.userId);
    // // this.route.data.subscribe(data => {this.coursesList = data['coursesList' ];
    // // });
    // this.getUser();
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.user.file = this.file;
      // this.AddForm.get('file').setValue(this.file);
      this.preview();
    }
  }
  preview() {
    // Show preview
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
  updateCourse(ID) {
    const formData = new FormData();
    formData.append('file', this.user.file);
    formData.append('username', this.user.username);
    formData.append('gender', this.user.gender);
    this.userService.updateUser(ID, formData).subscribe(
      next => {
        console.log('success');
      },
      (error) => {}
    );
  }
  // loadCourseDetail(userId) {
  //   this.userService.getUserForId(userId).subscribe(product => {
  //     this.user = product;
  //   });
  // }
  // getUser(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.userService.getUserForId(id)
  //     .subscribe(data => this.user = data);
  // }
}
