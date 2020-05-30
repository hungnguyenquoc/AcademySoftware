import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassStudyService } from 'app/shared/services/class-study.service';
import { ClassStudy } from 'app/shared/models/classStudy';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {
  classStudy: ClassStudy;
  constructor(private route: ActivatedRoute, private classService: ClassStudyService) { }

  ngOnInit() {
    // this.getClass();
     this.route.paramMap.subscribe(params => {
      const classId = + params.get('id');
      if (classId) {
        this.getClass(classId);
      }
    });
  }
  // getClass(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.classService.getClass(id)
  //     .subscribe(hero => this.classStudy = hero);
  // }
  getClass(id: number) {
    this.classService.getClass(id).subscribe(
      (err: any) => console.log(err)
    );
  }
}
