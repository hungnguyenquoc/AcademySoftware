import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/shared/course.service';
import { Course } from 'app/shared/models/course';
import { ProgramStudy } from 'app/shared/models/programStudy';
import { ProgramStudyService } from 'app/shared/services/program-study.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  coursesList: Course[];
  programsList: ProgramStudy[];
  constructor(private courseService: CourseService, 
              private programService: ProgramStudyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => this.coursesList = data);
    this.programService.getProgramStudies().subscribe(date => this.programsList = date);
    // this.route.paramMap.subscribe(params => {
    //   const courseId = + params.get('id');
    //   if (courseId) {
    //     this.getCourse(courseId);
    //   }
    // });
  }
  // getCourse(id: number) {
  //   this.courseService.getCourse(id).subscribe(
  //     (err: any) => console.log(err)
  //   );
  // }
  viewCourseDetail(id: number) {
    this.router.navigate(['course-detail/', id]);
  }
}
