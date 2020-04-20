import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { NgForm } from "@angular/forms";
import { ProgramStudy } from "../../../_models/programStudy";
import { CourseService } from "../../../_services/course.service";
import { ProgramStudyService } from "../../../_services/program-study.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin-course-update",
  templateUrl: "./admin-course-update.component.html",
  styleUrls: ["./admin-course-update.component.css"],
})
export class AdminCourseUpdateComponent implements OnInit {
  @Input() course;
  @Output() itemCreated = new EventEmitter<any>();
  @ViewChild('itemUpdateMdl', { static: false }) itemUpdateMdl: ElementRef;
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  programsList: ProgramStudy[];

  file: File;
  previewUrl: any;
  constructor(
    public modalService: BsModalService,
    public bsModalRef: BsModalRef,
    private courseService: CourseService,
    private programService: ProgramStudyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.programService.getProgramStudies().subscribe(data => this.programsList = data);
  }
  showModal() {
    this.bsModalRef = this.modalService.show(this.itemUpdateMdl, {
      class: 'modal-lg',
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.course.file = this.file;
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
    formData.append('file', this.course.file);
    formData.append('multipleFiles', this.course.multipleFiles);
    formData.append('couName', this.course.couName);
    formData.append('couCode', this.course.couCode);
    formData.append('couDescription', this.course.couDescription);
    formData.append('couContent', this.course.couContent);

    formData.append('status', this.course.status);
    formData.append('couPrice', this.course.couPrice);
    formData.append('couPromotionPrice', this.course.couPromotionPrice);
    formData.append('couViewCount', this.course.couViewCount);
    formData.append('proId', this.course.proId);
    this.courseService.updateCourse(ID, formData).subscribe(
      next => {
        this.bsModalRef.hide();
        this.itemCreated.emit();
        console.log('success');
      },
      (error) => {}
    );
  }
}
